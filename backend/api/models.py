from django.db import models
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFit, Adjust, ResizeToFill

# Create your models here.

class Post(models.Model):
    title = models.CharField('Зголовок', max_length=200)
    text = models.TextField('Текст поста')
    image = models.ImageField('Картинка', upload_to='posts', blank=True, null=True)
    # images = models.FileField()


class Cats(models.Model):
    breed = models.CharField('Порода', max_length=200)
    age = models.IntegerField('Возраст')
    # image = models.ImageField('Картинка', upload_to='cats', blank=True, null=True)
    image = ProcessedImageField(
        upload_to='cats',
        processors=[ResizeToFill(300, 200)],
        format='JPEG',
        options={'quality': 60},
        blank=True, null=True
    )