import datetime
import hashlib
from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from django.contrib.auth.hashers import make_password

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
    name = models.ForeignKey('RSOS', on_delete=models.CASCADE, max_length=20)

class Belongs(models.Model):
    user = models.ForeignKey('Users', on_delete=models.CASCADE, primary_key=True)
    name = models.ForeignKey('RSOS', on_delete=models.CASCADE, max_length=20)
    uni_name = models.ForeignKey('Universities', on_delete=models.CASCADE, max_length=10)

class Users(models.Model):
    user_id = models.AutoField(primary_key=True, blank=True)
    name = models.TextField(max_length=512, default='00000000')
    password = models.TextField(max_length=512)
    email = models.TextField(max_length=512)
    user_type = models.IntegerField()
    university = models.ForeignKey('Universities', on_delete=models.CASCADE)

    def save(self, *args, **kwargs):
        if not self.pk:
            some_salt = "some_salt"
            self.password = make_password(self.password, some_salt)
        super().save(*args, **kwargs)  # Call the "real" save() method.

# class RSOS(models.Model):
# 	rso_id = models.AutoField(primary_key=True, blank=True)
# 	name = models.CharField(max_length=20)
# 	admin = models.ForeignKey('Users', on_delete=models.CASCADE)
    
class RSOS(models.Model):
    rso_id = models.AutoField(primary_key=True, blank=True)
    name = models.CharField(max_length=20)
    pending = models.IntegerField(default=0) #0 for awaiting approval, 1 for approved
    admin = models.IntegerField()
    active = models.IntegerField(default=0) #0 for not active rso, 1 for active rso
    members = models.ManyToManyField(Users)
    university = models.ForeignKey('Universities', on_delete=models.CASCADE)

class Views(models.Model):
    user = models.ForeignKey('Users', on_delete=models.CASCADE, primary_key=True)
    event = models.ForeignKey('Events', null=True, on_delete=models.SET_NULL)

class Created_By(models.Model):
    user = models.ForeignKey('Users', on_delete=models.CASCADE, primary_key=True)
    name = models.ForeignKey('RSOS', on_delete=models.CASCADE, max_length=20)
    event = models.ForeignKey('Events', null=True, on_delete=models.SET_NULL)

class Comments(models.Model):
    event = models.ForeignKey('Events', on_delete=models.CASCADE)
    user = models.ForeignKey('Users', on_delete=models.CASCADE)
    comment_id = models.AutoField(primary_key=True, blank=True)
    body = models.CharField(max_length=240)
    rating = models.IntegerField(validators=[
            MaxValueValidator(5),
            MinValueValidator(1)
        ])

class Events(models.Model):
    event_id = models.AutoField(primary_key=True, blank=True)
    name = models.CharField(max_length=40)
    description = models.CharField(max_length=250)
    time = models.DateTimeField()
    creator = models.ForeignKey('Users', on_delete=models.CASCADE)
    host_rso = models.ForeignKey('RSOS', on_delete=models.CASCADE, blank=True, null=True)
    date = models.DateField(validators=[MinValueValidator(datetime.date.today)])
    email = models.TextField(max_length=30)
    event_type = models.IntegerField(validators=[
            MaxValueValidator(3),
            MinValueValidator(0)
        ])
    phone = models.CharField(max_length=10)
    longitude = models.FloatField()
    latitude = models.FloatField()
    loc_name = models.CharField(max_length=80)
    pending = models.IntegerField(blank=True, default=0)

    class Meta:
        unique_together = ["time", "loc_name"]
    
class Universities(models.Model):
    uni_name = models.CharField(max_length=20, primary_key=True)
    num_rsos = models.IntegerField(blank=True, default=0)
    description = models.CharField(max_length=140)
    num_stu = models.IntegerField(blank=True, default=0)
    longitude = models.FloatField()
    latitude = models.FloatField()
