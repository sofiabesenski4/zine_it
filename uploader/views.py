from django.http import HttpResponse
from uploader.models import Page 
from uploader.forms import PageForm
from django.views.generic.edit import FormView
from django.views.generic import ListView

class NewPageView(FormView):
    template_name = "uploader/pages/new.html"
    form_class = PageForm
    success_url = "/uploader/pages" 

class IndexPageView(ListView):
    model = Page 
    template_name = "uploader/pages/index.html"  
