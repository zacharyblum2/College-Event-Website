from django.shortcuts import render
from rest_framework import viewsets
from .serializers import *
from .models import Users
from django.http import HttpResponse, JsonResponse, HttpResponseBadRequest
from django.views.decorators.csrf import csrf_exempt
from django.core.exceptions import ObjectDoesNotExist, MultipleObjectsReturned, BadRequest
import json
from .customExceptions import IncorrectPassword, UserAlreadyExists
from django.views.generic.edit import DeleteView

#Sample for how to parse data out of a request body
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
            ret ["error"] = ""
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
                    raise UserAlreadyExists

                user = Users(name=req_name,
                             password=req_password,
                             email=req_email,
                             user_type=req_user_type,
                             university=Universities.objects.get(uni_name=req_university))
                user.save()

                ret["data"]['user_id'] = int(Users.objects.get(email=req_email).user_id)
                
            except UserAlreadyExists:
                return HttpResponseBadRequest('Sorry, that email address is already taken'.\
                                      format(request.method), status=400)

        return JsonResponse(ret)

@csrf_exempt
def Users_login(request):
    #TODO: Return the University that the user belongs to

    if request.method == "POST":
        ret = {}
        ret["error"] = ""
        ret["data"] = {}

        body_unicode = request.body.decode("utf-8")
        body = json.loads(body_unicode)

        req_email = str(body["email"])
        req_password = str(body["password"])

        try:
            #try pulling out the user and if you get it then creating the return json body
            user = Users.objects.get(email=req_email)
            
            if(req_password != str(user.password)):
                raise IncorrectPassword
            
            ret["data"]['name'] = str(user.name)
            ret["data"]['user_id'] = str(user.user_id)
            ret["data"]['user_type'] = int(user.user_type)
            if(int(user.user_type) == 2):
                ret["data"]['university'] = ""
            else:
                ret["data"]['university'] = str(user.university.uni_name)
        
        except ValueError:
            return HttpResponseBadRequest('Please enter a valid User ID and password.'.\
                                      format(request.method), status=400)
        #Please make sure this is above incorrect password, we want this to throw first.
        except ObjectDoesNotExist:
            return HttpResponseBadRequest('User not found.'.\
                                      format(request.method), status=401)
        except MultipleObjectsReturned:
            return HttpResponseBadRequest('Found multiple users with this information.'.\
                                      format(request.method), status=400)
        except IncorrectPassword:
            return HttpResponseBadRequest('Wrong password.'.\
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