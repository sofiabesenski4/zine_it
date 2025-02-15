from .models import Zine, Page

from rest_framework import serializers

class PageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Page 
        fields = "__all__"

class ZineSerializer(serializers.ModelSerializer):
    pages = PageSerializer(many=True, read_only=True)

    class Meta:
        model = Zine 
        fields = ['id', 'name', 'pages']
        read_only_fields=['pages']

