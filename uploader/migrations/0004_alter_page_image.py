# Generated by Django 5.1.2 on 2024-12-08 00:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('uploader', '0003_page_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='page',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='uploaded_images/'),
        ),
    ]
