# Generated by Django 3.1.2 on 2020-11-03 12:20

from django.db import migrations
import imagekit.models.fields


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_auto_20201103_1001'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cats',
            name='image',
            field=imagekit.models.fields.ProcessedImageField(upload_to='cats'),
        ),
    ]
