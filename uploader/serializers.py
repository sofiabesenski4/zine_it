from .models import Zine, Page

from rest_framework import serializers



class PageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Page 
        fields = ['id', 'zine', 'index', 'image']

class ZineSerializer(serializers.ModelSerializer):
    pages = PageSerializer(many=True)

    class Meta:
        model = Zine 
        fields = ['id', 'name', 'pages']

