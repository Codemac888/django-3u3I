from django.contrib import admin
from django.urls import path
from myapp import views  # Import your app's views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('my-page/', views.my_page, name='my_page'),  # Add a path for your HTML page
]
