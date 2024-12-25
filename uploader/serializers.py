from .models import Zine, Page

from rest_framework import serializers


class ZineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Zine 
        fields = ['id', 'name']

class PageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Page 
        fields = ['id', 'zine', 'index', 'image']

