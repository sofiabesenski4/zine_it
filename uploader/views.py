from django.http import HttpResponse
from uploader.models import Page, Zine 
from uploader.serializers import ZineSerializer
from uploader.forms import PageForm
from django.views.generic.edit import CreateView, UpdateView
from django.views.generic import ListView

from rest_framework import viewsets

class PageCreateView(CreateView):
    form_class = PageForm
    template_name = "uploader/pages/new.html"
    success_url = "/uploader/pages" 

    def post(self, request, *args, **kwargs):
        return super(PageCreateView, self).post(request, args, kwargs)


class PageUpdateView(UpdateView):
    form_class = PageForm 
    template_name = "uploader/pages/edit.html"
    success_url = "/uploader/pages" 

    def get_object(self):
        page = Page.objects.get(id=self.kwargs["id"])
        return page 

class PageIndexView(ListView):
    model = Page 
    template_name = "uploader/pages/index.html"  

class ZineViewSet(viewsets.ModelViewSet):
    queryset = Zine.objects.all().order_by('name')
    serializer_class = ZineSerializer
