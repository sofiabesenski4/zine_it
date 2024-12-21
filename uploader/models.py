from django.db import models


class SheetSize(models.TextChoices):
    A4 = "A4", "A4, Europe"
    LETTER = "Lt", "US Letter (8.5x11in)"
    LEGAL = "Lg", "US Legal (8.5x14in)"
    TABLOID = "Tb", "US Tabloid (11x17in)"


class Layout(models.TextChoices):
    TRAD_4 = (
        "T4",
        "4p Single fold vertical, one-side print, Portrait",
    )  # MVP -> z scan: 0' 3', 1 2
    TRAD_CUT_8 = (
        "TC8",
        "8p Traditional inner-cut, single-side print, Landscape",
    )  # Literally everywhere -> z scan: 6' 5' 4' 3', 7 0 1 2
    # SERPENTINE_16 = "S16", ("16p Serpentine (S-shaped), single-side print") # e.g., https://anatomicair.com/how-to-make-a-one-page-zine/
    # I_16 = "S16", ("16p I-shaped inner cut with two others, single-side print") # e.g., https://infolit-idaho.github.io/infolit-for-everyone/zines/


class Zine(models.Model):
    name = models.CharField(max_length=70)
    sheet = models.CharField(max_length=4, choices=SheetSize, default=SheetSize.LETTER)
    layout = models.CharField(max_length=4, choices=Layout, default=Layout.TRAD_4)

    def __str__(self):
        return self.name


class Page(models.Model):
    index = models.IntegerField(default=0)
    zine = models.ForeignKey(Zine, related_name="pages", on_delete=models.CASCADE, default=None)
    image = models.ImageField(upload_to="uploaded_images/", null=True, blank=True)

