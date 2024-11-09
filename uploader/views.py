from django.http import HttpResponse
from uploader.forms import PageForm
from django.views.generic.edit import FormView

class NewView(FormView):
    template_name = "new.html"
    form_class = PageForm
    success_url = "/url" 
