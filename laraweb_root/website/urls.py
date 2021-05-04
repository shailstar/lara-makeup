from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about', views.about),
    path('services', views.services),
    path('blog', views.blog),
    path('portfolio', views.portfolio),
    path('contact', views.contact)
]