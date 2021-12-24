from django.urls import path, include
from rest_framework import routers
from .views import *

router = routers.DefaultRouter()

urlpatterns = [
    path('stock/', stock_list),
    path('', include(router.urls)),
]