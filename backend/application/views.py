from django.shortcuts import render
from rest_framework import viewsets
from .serializers import Users_serializer
from .models import Users


# Create your views here.
class Users_view(viewsets.ModelViewSet):
    serializer_class = Users_serializer
    queryset = Users.objects.all()

