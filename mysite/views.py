# views.py
from django.shortcuts import render

def my_page(request):
    return render(request, 'my_page.html')  # 'my_page.html' should be in your templates folder
