from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.


def home(request):
    return render(request, 'website/home.html')


def about(request):
    return render(request, 'website/about.html')


def services(request):
    return render(request, 'website/services.html')


def blog(request):
    return render(request, 'website/blog.html')


def portfolio(request):
    return render(request, 'website/portfolio.html')


def contact(request):
    return render(request, 'website/contact.html')

def bridal(request):
    return render(request, 'website/bridal.html')

def engagement(request):
    return render(request, 'website/engagement.html')

def prewed(request):
    return render(request, 'website/prewed.html')

def mehndi(request):
    return render(request, 'website/mehndi.html')

