from django.shortcuts import render
from rest_framework import viewsets
from .serializers import *
from .models import Users
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.exceptions import ObjectDoesNotExist, MultipleObjectsReturned
import json
from .customExceptions import IncorrectPassword

#Sample for how to parse data out of a request body
    # returnBody = str(request.body) + "\n" + str(request.scheme) + "\n" + str(request.path) + "\n" + str(request.content_type)
    # body_unicode = request.body.decode("utf-8")
    # body = json.loads(body_unicode)
    # user_id = str(body["user_id"])


# Create your views here.
class Users_view(viewsets.ModelViewSet):
    serializer_class = Users_serializer
    queryset = Users.objects.all()

class RSOS_view(viewsets.ModelViewSet):
    serializer_class = RSOS_serializer
    queryset = RSOS.objects.all()

@csrf_exempt
def Users_login(request):
    #Frontend give me username and password
    #if exists return user_id, name, university name, user_type

    #TODO: Return the University that the user belongs to

    if request.method == "POST":
        ret = {}
        ret["error"] = ""
        ret["data"] = {}

        body_unicode = request.body.decode("utf-8")
        body = json.loads(body_unicode)
        req_user_id = str(body["user_id"])
        req_password = str(body["password"])

        try:
            #try pulling out the user and if you get it then creating the return json body
            user = Users.objects.get(user_id=req_user_id)
            
            if(req_password != str(user.password)):
                raise IncorrectPassword
            
            ret["data"]['user_id'] = str(user.user_id)
            ret["data"]['name'] = str(user.name)
            ret["data"]['user_type'] = int(user.user_type)

        except ObjectDoesNotExist:
            ret["error"] = "User not found"
        except MultipleObjectsReturned:
            ret["error"] = "Found multiple users with this information"
        except IncorrectPassword:
            ret["error"] = "Wrong Password"

    return JsonResponse(ret)