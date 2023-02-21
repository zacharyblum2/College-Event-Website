from django.db import models

# Create your models here.

class Creates(models.Model):
    user = models.ForeignKey('Users', on_delete=models.CASCADE, primary_key=True)
    name = models.ForeignKey('RSOS', on_delete=models.CASCADE, max_length=20)
    creator1 = models.ForeignKey('Users', null=True, on_delete=models.SET_NULL, related_name='creator1')
    creator2 = models.ForeignKey('Users', null=True, on_delete=models.SET_NULL, related_name='creator2')
    creator3 = models.ForeignKey('Users', null=True, on_delete=models.SET_NULL, related_name='creator3')
    creator4 = models.ForeignKey('Users', null=True, on_delete=models.SET_NULL, related_name='creator4')

class Joins(models.Model):
    user = models.ForeignKey('Users', on_delete=models.CASCADE, primary_key=True)
    name = models.ForeignKey('RSOS', null=True, on_delete=models.SET_NULL, max_length=20)

class Belongs(models.Model):
    user = models.ForeignKey('Users', on_delete=models.CASCADE, primary_key=True)
    name = models.ForeignKey('RSOS', null=True, on_delete=models.SET_NULL, max_length=20)
    uni_name = models.ForeignKey('Universities', on_delete=models.CASCADE, max_length=10)

class Users(models.Model):
    user_id = models.IntegerField(primary_key=True)
    password = models.TextField(max_length=512)
    email = models.TextField(max_length=512)
    user_type = models.IntegerField()

class RSOS(models.Model):
    name = models.CharField(max_length=20, primary_key=True, default="")
    admin = models.ForeignKey('Users', on_delete=models.CASCADE)

class Views(models.Model):
    user = models.ForeignKey('Users', on_delete=models.CASCADE, primary_key=True)
    event = models.ForeignKey('Events', null=True, on_delete=models.SET_NULL)

class Created_By(models.Model):
    user = models.ForeignKey('Users', on_delete=models.CASCADE, primary_key=True)
    name = models.ForeignKey('RSOS', null=True, on_delete=models.SET_NULL, max_length=20)
    event = models.ForeignKey('Events', null=True, on_delete=models.SET_NULL)

class Comments(models.Model):
    event = models.ForeignKey('Events', on_delete=models.CASCADE)
    user = models.ForeignKey('Users', on_delete=models.CASCADE)
    comment_id = models.IntegerField(primary_key=True)
    body = models.CharField(max_length=240)
    rating = models.IntegerField()

class Events(models.Model):
    event_id = models.IntegerField(primary_key=True)
    creator = models.ForeignKey('Users', on_delete=models.CASCADE)
    host_rso = models.ForeignKey('RSOS', on_delete=models.CASCADE)
    date = models.DateField()
    time = models.DateTimeField()
    email = models.TextField(max_length=30)
    event_type = models.IntegerField()
    phone = models.CharField(max_length=10)
    longitude = models.IntegerField()
    latitude = models.IntegerField()
    loc_name = models.TextField(max_length=20)

class Universities(models.Model):
    uni_name = models.CharField(max_length=10, primary_key=True)
    num_rsos = models.IntegerField()
    description = models.CharField(max_length=140)
    num_stu = models.IntegerField()
    longitude = models.IntegerField()
    latitude = models.IntegerField()
    loc_name = models.TextField(max_length=20)
