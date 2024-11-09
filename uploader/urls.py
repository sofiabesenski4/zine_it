from django.urls import path

from . import views 

urlpatterns = [
    path("pages", views.PageIndexView.as_view(), name="index_pages"),
    path("pages/new", views.PageCreateView.as_view(), name="new_page"),
]
