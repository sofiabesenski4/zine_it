from django.http import HttpResponse
from uploader.models import Page, Zine 
from uploader.serializers import ZineSerializer, PageSerializer
import pdb

from rest_framework import viewsets

class ZineViewSet(viewsets.ModelViewSet):
    queryset = Zine.objects.all().order_by('name')
    serializer_class = ZineSerializer

class PageViewSet(viewsets.ModelViewSet):
    model = Page
    queryset = Page.objects.all().order_by('id')
    serializer_class = PageSerializer

    def get_queryset(self):
        queryset = self.queryset
        if self.request.query_params.get('zine'):
            zine = self.request.query_params.get('zine')
            return queryset.filter(zine=zine) 
        return queryset
    
