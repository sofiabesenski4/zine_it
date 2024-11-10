from django.http import HttpResponse
from uploader.models import Page 
from uploader.forms import PageForm
from django.views.generic.edit import CreateView
from django.views.generic import ListView

class PageCreateView(CreateView):
    form_class = PageForm
    template_name = "uploader/pages/new.html"
    success_url = "/uploader/pages" 

class PageIndexView(ListView):
    model = Page 
    template_name = "uploader/pages/index.html"  
