from .models import Zine, Page

from rest_framework import serializers

class PageSerializer(serializers.ModelSerializer):
    image_url = serializers.ImageField(required=False)

    class Meta:
        model = Page
        fields = ['id', 'zine', 'index', 'image_url']

class ZineSerializer(serializers.ModelSerializer):
    pages = PageSerializer(many=True, read_only=True)

    class Meta:
        model = Zine
        fields = ['id', 'name', 'pages']
        read_only_fields=['pages']

