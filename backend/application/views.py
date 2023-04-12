from django.shortcuts import render
from rest_framework import viewsets
from .serializers import *
from .models import Users
from django.http import HttpResponse, JsonResponse, HttpResponseBadRequest
from django.views.decorators.csrf import csrf_exempt
from django.core.exceptions import ObjectDoesNotExist, MultipleObjectsReturned, BadRequest
import json
from .customExceptions import IncorrectPassword, ObjectAlreadyExists, OutOfUniversity
from django.views.generic.edit import DeleteView
import random

# Sample for how to parse data out of a request body
# returnBody = str(request.body) + "\n" + str(request.scheme) + "\n" + str(request.path) + "\n" + str(request.content_type)
# body_unicode = request.body.decode("utf-8")
# body = json.loads(body_unicode)
# user_id = str(body["user_id"])


# Create your views here.
class Users_view(viewsets.ModelViewSet):
    serializer_class = Users_serializer
    queryset = Users.objects.all()


@csrf_exempt
def Users_register(request):

    if request.method == "POST":
        ret = {}
        ret["error"] = ""
        ret["data"] = {}

        body_unicode = request.body.decode("utf-8")
        body = json.loads(body_unicode)

        req_name = str(body["name"])
        req_password = str(body["password"])
        req_email = str(body["email"])
        req_university = str(body["university"])
        req_user_type = str(body["user_type"])

        try:

            if Users.objects.filter(email=req_email).exists():
                raise ObjectAlreadyExists

            user = Users(name=req_name,
                         password=req_password,
                         email=req_email,
                         user_type=req_user_type,
                         university=Universities.objects.get(uni_name=req_university))
            user.save()

            # Update the university student count
            university = user.university
            university.num_stu += 1
            university.save()

            ret["data"]['user_id'] = int(
                Users.objects.get(email=req_email).user_id)
        except ObjectAlreadyExists:
            return HttpResponseBadRequest('Sorry, that email address is already taken'.
                                          format(request.method), status=400)

        return JsonResponse(ret)


@csrf_exempt
def Users_login(request):
    # TODO: Return the University that the user belongs to

    if request.method == "POST":
        ret = {}
        ret["error"] = ""
        ret["data"] = {}

        body_unicode = request.body.decode("utf-8")
        body = json.loads(body_unicode)

        req_email = str(body["email"])
        req_password = str(body["password"])

        try:
            # try pulling out the user and if you get it then creating the return json body
            user = Users.objects.get(email=req_email)

            if (req_password != str(user.password)):
                raise IncorrectPassword

            ret["data"]['name'] = str(user.name)
            ret["data"]['user_id'] = str(user.user_id)
            ret["data"]['user_type'] = int(user.user_type)
            if (int(user.user_type) == 2):
                ret["data"]['university'] = ""
            else:
                ret["data"]['university'] = str(user.university.uni_name)

        except ValueError:
            return HttpResponseBadRequest('Please enter a valid User ID and password.'.
                                          format(request.method), status=400)
        # Please make sure this is above incorrect password, we want this to throw first.
        except ObjectDoesNotExist:
            return HttpResponseBadRequest('User not found.'.
                                          format(request.method), status=401)
        except MultipleObjectsReturned:
            return HttpResponseBadRequest('Found multiple users with this information.'.
                                          format(request.method), status=400)
        except IncorrectPassword:
            return HttpResponseBadRequest('Wrong password.'.
                                          format(request.method), status=401)

        return JsonResponse(ret)


@csrf_exempt
def get_user_rsos(request):

    if request.method == "POST":
        ret = {}
        ret["error"] = ""
        ret["data"] = {}
        ret["data"]["joined"] = []
        ret["data"]["not_joined"] = []

        body_unicode = request.body.decode("utf-8")
        body = json.loads(body_unicode)

        req_user_id = int(body["user_id"])

        try:
            user = Users.objects.get(user_id=req_user_id)

            for rso in RSOS.objects.filter(university=user.university):
                if rso.members.filter(user_id=user.user_id).exists():
                    ret["data"]["joined"].append(rso.name)
                else:
                    ret["data"]["not_joined"].append(rso.name)

        except ObjectDoesNotExist:
            return HttpResponseBadRequest('User not found.'.
                                          format(request.method), status=401)

        return JsonResponse(ret)


@csrf_exempt
def RSOS_register(request):

    if request.method == "POST":
        ret = {}
        ret["error"] = ""
        ret["data"] = {}

        body_unicode = request.body.decode("utf-8")
        body = json.loads(body_unicode)

        req_name = str(body["name"])
        req_admin = int(body["admin"])
        req_university = str(body["university"])

        try:
            if (RSOS.objects.filter(name=req_name).exists()):
                raise ObjectAlreadyExists

            university = Universities.objects.get(uni_name=req_university)

            admin = Users.objects.get(user_id=req_admin)

            rso = RSOS(name=req_name,
                       admin=admin.user_id,
                       university=university)

            rso.save()
            rso.members.add(admin)
            rso.save()

            admin.user_type = 1
            admin.save()

            # Update the university num_rsos count
            university.num_rsos += 1
            university.save()

            ret["data"]["university"] = university.uni_name

            ret["data"]["name"] = req_name

        except ObjectDoesNotExist:
            return HttpResponseBadRequest('Admin, member, or university not found.'.
                                          format(request.method), status=401)
        except ObjectAlreadyExists:
            return HttpResponseBadRequest('An RSO with this name already exists'.
                                          format(request.method), status=401)

        return JsonResponse(ret)


@csrf_exempt
def join_rso(request):
    if request.method == "POST":
        ret = {}
        ret["error"] = ""
        ret["data"] = {}

        body_unicode = request.body.decode("utf-8")
        body = json.loads(body_unicode)

        req_id = str(body["user_id"])
        req_rso = str(body["rso"])

        try:
            user = Users.objects.get(user_id=req_id)
            rso = RSOS.objects.get(name=req_rso)
            user_university = user.university
            rso_university = rso.university

            if (user_university.uni_name != rso_university.uni_name):
                raise OutOfUniversity

            rso.members.add(user)

            if (rso.members.count() > 4):
                rso.active = 1

            rso.save()
        except OutOfUniversity:
            return HttpResponseBadRequest('A user cannot join an RSO from another university'.
                                          format(request.method), status=401)
        except ObjectDoesNotExist:
            return HttpResponseBadRequest('User, RSO, or University not found.'.
                                          format(request.method), status=401)

        return JsonResponse(ret)


@csrf_exempt
def leave_rso(request):
    if request.method == "POST":
        ret = {}
        ret["error"] = ""
        ret["data"] = {}

        body_unicode = request.body.decode("utf-8")
        body = json.loads(body_unicode)

        req_id = str(body["user_id"])
        req_rso = str(body["rso"])

        try:
            user = Users.objects.get(user_id=req_id)
            rso = RSOS.objects.get(name=req_rso)
            user_university = user.university
            rso_university = rso.university

            if (user_university.uni_name != rso_university.uni_name):
                raise OutOfUniversity

            rso.members.remove(user)
            rso.save()
            
            if ((user.user_id == rso.admin) and (rso.members.count > 0)):
                members = list(rso.members)
                randomMem = random.choice(members)
                rso.admin = randomMem.user_id

            if (rso.members.count() < 5):
                rso.active = 0

            rso.save()
        except OutOfUniversity:
            return HttpResponseBadRequest('A user cannot join an RSO from another university'.
                                        format(request.method), status=401)
        except ObjectDoesNotExist:
            return HttpResponseBadRequest('User, RSO, or University not found.'.
                                        format(request.method), status=401)

        return JsonResponse(ret)


@csrf_exempt
def get_user_events(request):
    if request.method == "POST":
        ret = {}
        ret["error"] = ""
        ret["data"] = {}
        ret["data"]["events"] = []

        body_unicode = request.body.decode("utf-8")
        body = json.loads(body_unicode)

        req_id = str(body["user_id"])

        try:
            user = Users.objects.get(user_id=req_id)
            university = user.university
            rsos = []
            for rso in RSOS.objects.filter(university=university):
                if rso.members.filter(user_id=user.user_id).exists():
                    rsos.append(rso.name)

            for event in Events.objects.all():

                eventObject = {}
                eventObject["event_id"] = event.event_id
                eventObject["name"] = event.name
                eventObject["description"] = event.description
                eventObject["creator"] = event.creator.name
                eventObject["host_rso"] = event.host_rso.name
                eventObject["date"] = event.date
                eventObject["time"] = event.time
                eventObject["email"] = event.email
                eventObject["event_type"] = event.event_type
                eventObject["phone"] = event.phone
                eventObject["longitude"] = event.longitude
                eventObject["latitude"] = event.latitude
                eventObject["loc_name"] = event.loc_name

                match event.event_type:
                    case 0:
                        ret["data"]['events'].append(eventObject)
                        break
                    case 1:
                        if(university == event.creator.university):
                            ret["data"]['events'].append(eventObject)
                        break
                    case 2:
                        if(event.host_rso.name in rsos):
                            ret["data"]['events'].append(eventObject)
                        break
        except ObjectDoesNotExist:
            return HttpResponseBadRequest('User, RSO, or University not found.'.\
                                        format(request.method), status=401)

        return JsonResponse(ret)

@csrf_exempt
def get_user_admin_rsos(request):
    if request.method == "POST":
        ret = {}
        ret["error"] = ""
        ret["data"] = {}
        ret["data"]["rsos"] = []
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)

        req_id = int(body["user_id"])

        try:
            user = Users.objects.get(user_id=req_id)
            for rso in RSOS.objects.all():
                if (rso.admin == user.user_id):
                    ret["data"]["rsos"].append(rso.name)
        except ObjectDoesNotExist:
            return HttpResponseBadRequest('User, RSO, or University not found.'.\
                                        format(request.method), status=401)

        return JsonResponse(ret)

@csrf_exempt
def get_event_comments(request):
    if request.method == "POST":
        ret = {}
        ret["error"] = ""
        ret["data"] = {}
        ret["data"]["comments"] = []

        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)

        req_event_id = int(body["event_id"])

        try:
            event = Events.objects.get(event_id=req_event_id)
            
            for comment in Comments.objects.filter(event=event.event_id):
                temp = {}
                temp["user"] = comment.user.name
                temp["user_id"] = comment.user.user_id
                temp["comment_id"] = comment.comment_id
                temp["body"] = comment.body
                temp["rating"] = comment.rating
                ret["data"]["comments"].append(temp)
            
        except ObjectDoesNotExist:
            return HttpResponseBadRequest('Event Not found'.\
                                        format(request.method), status=401)
    
        return JsonResponse(ret)

@csrf_exempt
def delete_comment(request):
    if request.method == "DELETE":
        ret = {}
        ret["error"] = ""
        ret["data"] = {}

        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)

        req_comment_id = int(body["comment_id"])

        try:
            comment = Comments.objects.get(comment_id=req_comment_id)

            comment.delete()


        except ObjectDoesNotExist:
            return HttpResponseBadRequest('Event Not found'.\
                                        format(request.method), status=401)
    
        return JsonResponse(ret)

@csrf_exempt
def edit_comment(request):
    if request.method == "POST":
        ret = {}
        ret["error"] = ""
        ret["data"] = {}

        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)

        req_comment_id = int(body["comment_id"])
        req_body = str(body["body"])
        req_rating = int(body["rating"])

        try:
            comment = Comments.objects.get(comment_id=req_comment_id)

            comment.body = req_body
            comment.rating = req_rating

            comment.save()

            ret["data"]["comment_id"] = comment.comment_id
            ret["data"]["body"] = comment.body
            ret["data"]["rating"] = comment.rating

        except ObjectDoesNotExist:
            return HttpResponseBadRequest('Event Not found'.\
                                        format(request.method), status=401)
    
        return JsonResponse(ret)

class RSOS_view(viewsets.ModelViewSet):
    serializer_class = RSOS_serializer
    queryset = RSOS.objects.all()


class Comments_view(viewsets.ModelViewSet):
    serializer_class = Comments_serializer
    queryset = Comments.objects.all()


class Events_view(viewsets.ModelViewSet):
    serializer_class = Events_serializer
    queryset = Events.objects.all()


class Universities_view(viewsets.ModelViewSet):
    serializer_class = Universities_serializer
    queryset = Universities.objects.all()
