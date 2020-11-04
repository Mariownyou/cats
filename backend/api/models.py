from django.db import models
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFit, Adjust, ResizeToFill

# Create your models here.

class Group(models.Model):
    title = models.CharField(max_length=200, unique=True)
    slug = models.SlugField(max_length=25, unique=True, blank=False, null=False)
    description = models.TextField(blank=True, null=True)
    image = ProcessedImageField(
        upload_to='groups',
        processors=[ResizeToFill(300, 200)],
        format='JPEG',
        options={'quality': 60},
        blank=True, null=True
    )

    def __str__(self):
        return self.title


class Post(models.Model):
    title = models.CharField('Зголовок', max_length=200)
    text = models.TextField('Текст поста')
    group = models.ForeignKey(
        Group,
        on_delete=models.CASCADE,
        related_name='posts',
        verbose_name='Группа',
        help_text='Выберите группу, если хотите 😉'
    )
    pub_date = models.DateTimeField(
        'date published',
        auto_now_add=True
    )
    image = models.ImageField('Картинка', upload_to='posts', blank=True, null=True)
    # images = models.FileField()


class Cat(models.Model):
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
