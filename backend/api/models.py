from django.db import models

# Create your models here.

class Post(models.Model):
    title = models.CharField('Зголовок', max_length=200)
    text = models.TextField('Текст поста')
    # images = models.FileField()


class Cats(models.Model):
    breed = models.CharField('Порода', max_length=200)
    age = models.IntegerField('Возраст')