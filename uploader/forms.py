from django import forms

class PageForm(forms.Form):
    index = forms.IntegerField()
    success_url = "/uploader/"

