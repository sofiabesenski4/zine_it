from django import forms
from uploader.models import Page

class PageForm(forms.ModelForm):
    index = forms.IntegerField()
    success_url = "/uploader/pages"

    class Meta:
        model = Page
        fields = ["index", "zine", "image"] 
