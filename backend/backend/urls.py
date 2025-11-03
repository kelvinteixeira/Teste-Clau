from django.http import HttpResponse
from django.contrib import admin
from django.urls import path, include

def home(request):
    return HttpResponse("API Online ✅ — use /api/orders/")

urlpatterns = [
    path("", home),
    path("admin/", admin.site.urls),
    path("api/", include("orders.urls")),
]
