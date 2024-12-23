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
    all_zines = g.List(ZineType)
    count_zines = g.BigInt()
    zine_by_id = g.Field(ZineType, id=g.String())

    def resolve_all_zines(root, info):
        return models.Zine.objects.all()

    def resolve_count_zines(root, info):
        return models.Zine.objects.count()
    
    def resolve_zine_by_id(root, info, id):
        return models.Zine.objects.get(pk=id)

schema = g.Schema(query=Query)
