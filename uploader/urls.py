from django.urls import path, include
from rest_framework import routers
from .views import ZineViewSet
from . import views 

router = routers.DefaultRouter()
router.register(r'zines', ZineViewSet)

app_name = "uploader"

urlpatterns = [
    path('', include(router.urls)),
]
