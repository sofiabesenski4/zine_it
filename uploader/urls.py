from django.urls import path

from . import views 

app_name = "uploader"
urlpatterns = [
    path("pages", views.PageIndexView.as_view(), name="index_pages"),
    path("pages/new", views.PageCreateView.as_view(), name="new_page"),
    path("pages/<int:id>/edit", views.PageUpdateView.as_view(), name="edit_page"),
]
