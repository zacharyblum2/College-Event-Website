from rest_framework import serializers
from .models import *

class Users_serializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ('user_id', 'name', 'password', 'email', 'user_type')

class RSOS_serializer(serializers.ModelSerializer):
    class Meta:
        model = RSOS
        fields = ('name', 'admin')