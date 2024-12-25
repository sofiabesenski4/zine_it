from .models import Zine, Page

from rest_framework import serializers


class ZineSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Zine 
        fields = ['id', 'name']
