import graphene as g
from graphene_django import DjangoObjectType
from . import models

class ZineType(DjangoObjectType):
    class Meta:
        model = models.Zine
        fields = ("id", "name", "sheet", "layout", "pages")

class PageType(DjangoObjectType):
    class Meta:
        model = models.Page
        fields = ("index", "image")

class Query(g.ObjectType):
    hello = g.String(default_value="Hi!")
    all_zines = g.List(ZineType)
    count_zines = g.BigInt()

    def resolve_all_zines(root, info):
        return models.Zine.objects.all()

    def resolve_count_zines(root, info):
        return models.Zine.objects.count()

schema = g.Schema(query=Query)