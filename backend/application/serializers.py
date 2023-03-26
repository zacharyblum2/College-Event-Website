from rest_framework import serializers
from .models import *

class Users_serializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ('user_id', 'name', 'password', 'email', 'user_type')

class RSOS_serializer(serializers.ModelSerializer):
    class Meta:
        model = RSOS
        fields = ('rso_id', 'name', 'admin')

class Comments_serializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = ('event', 'user', 'comment_id', 'body')

class Events_serializer(serializers.ModelSerializer):
    class Meta:
        model = Events
        fields = ('event_id', 'creator', 'host_rso', 'date', 'time', 'email', 'event_type', 
        'phone', 'longitude', 'latitude', 'loc_name')

class Universities_serializer(serializers.ModelSerializer):
    class Meta:
        model = Universities
        fields = ('uni_name', 'description', 'longitude', 'latitude', 'num_stu', 'num_rsos')
