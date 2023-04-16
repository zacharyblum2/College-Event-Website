"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from application import views

router = routers.DefaultRouter()
router.register(r'users', views.Users_view, 'Users')
router.register(r'rsos', views.RSOS_view, 'Rsos')
router.register(r'comments', views.Comments_view, 'Comments')
router.register(r'events', views.Events_view, 'Events')
router.register(r'universities', views.Universities_view, 'Universities')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/login/', views.Users_login),
    path('api/register/', views.Users_register),
    path('api/get_user_rsos/', views.get_user_rsos),
    path('api/register_rso/', views.RSOS_register),
    path('api/join_rso/', views.join_rso),
    path('api/leave_rso/', views.leave_rso),
    path('api/get_user_events/', views.get_user_events),
    path('api/get_user_admin_rsos/', views.get_user_admin_rsos),
    path('api/get_event_comments/', views.get_event_comments),
    path('api/delete_comment/', views.delete_comment),
    path('api/edit_comment/', views.edit_comment),
    path('api/delete_event/', views.delete_event),
]
