from django.urls import path

from . import views 

urlpatterns = [
    path("pages", views.IndexPageView.as_view(), name="index_pages"),
    path("pages/new", views.NewPageView.as_view(), name="new_page"),
]
