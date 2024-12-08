from django.db import models

class Zine(models.Model):
    name = models.CharField(max_length=70)
    def __str__(self):
        return self.name

class Page(models.Model):
    index = models.IntegerField(default=0)
    zine = models.ForeignKey(Zine, on_delete=models.CASCADE, default=None)
    image = models.ImageField(upload_to="uploaded_images/", null=True, blank=True) 

