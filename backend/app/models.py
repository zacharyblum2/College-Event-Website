from django.db import models

# Create your models here.

class Creates(models.Model):
    user_id = models.ForeignKey('Users', on_delete=models.SET_NULL, primary_key=True)
    name = models.ForeignKey('RSOS', on_delete=models.CASCADE)
    creator1 = models.ForeignKey('Users', on_delete=models.SET_NULL)
    creator2 = models.ForeignKey('Users', on_delete=models.SET_NULL)
    creator3 = models.ForeignKey('Users', on_delete=models.SET_NULL)
    creator4 = models.ForeignKey('Users', on_delete=models.SET_NULL)

class Joins(models.Model):
    user_id = models.ForeignKey('Users', on_delete=models.SET_NULL, primary_key=True)
    name = models.ForeignKey('RSOS', on_delete=models.SET_NULL, max_length=10)

class Belongs(models.Model):
    user_id = models.ForeignKey('Users', on_delete=models.SET_NULL, primary_key=True)
    name = models.ForeignKey('RSOS', on_delete=models.SET_NULL)
    uni_name = models.ForeignKey('Universities', on_delete=models.CASCADE)

class Users(models.Model):
    user_id = models.IntegerField(primary_key=True)
    password = models.TextField()
    email = models.TextField()
    user_type = models.IntegerField()

class RSOS(models.Model):
    name = models.TextField(primary_key=True)
    admin_id = models.ForeignKey('Users', on_delete=models.SET_NULL)

class Views(models.Model):
    user_id = models.ForeignKey('Users', on_delete=models.SET_NULL, primary_key=True)
    event_id = models.ForeignKey('Events', on_delete=models.SET_NULL)

class Created_By(models.Model):
    user_id = models.ForeignKey('Users', on_delete=models.SET_NULL, primary_key=True)
    name = models.ForeignKey('RSOS', on_delete=models.SET_NULL)
    event_id = models.ForeignKey('Events', on_delete=models.SET_NULL)

class Comments(models.Model):
    event_id = models.ForeignKey('Events', on_delete=models.CASCADE)
    user_id = models.ForeignKey('Users', on_delete=models.CASCADE)
    comment_id = models.IntegerField(primary_key=True)
    body = models.CharField(max_length=240)
    rating = models.IntegerField()

class Events(models.Model):
    event_id = models.IntegerField(primary_key=True)
    creator = models.ForeignKey('Users', on_delete=models.CASCADE)
    host_rso = models.ForeignKey('RSOS', on_delete=models.CASCADE)
    date = models.DateField()
    time = models.DateTimeField()
    email = models.TextField()
    event_type = models.IntegerField()
    phone = models.CharField(max_length=10)
    longitude = models.IntegerField()
    latitude = models.IntegerField()
    loc_name = models.TextField()

class Universities(models.Model):
    uni_name = models.CharField(max_length=10, primary_key=True)
    num_rsos = models.IntegerField()
    description = models.CharField(max_length=140)
    num_stu = models.IntegerField()
    longitude = models.IntegerField()
    latitude = models.IntegerField()
    loc_name = models.TextField()
