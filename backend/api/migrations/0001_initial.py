# Generated by Django 3.1.2 on 2020-11-04 08:47

from django.db import migrations, models
import django.db.models.deletion
import imagekit.models.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cat',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('breed', models.CharField(max_length=200, verbose_name='Порода')),
                ('age', models.IntegerField(verbose_name='Возраст')),
                ('image', imagekit.models.fields.ProcessedImageField(blank=True, null=True, upload_to='cats')),
            ],
        ),
        migrations.CreateModel(
            name='Group',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200, unique=True)),
                ('slug', models.SlugField(max_length=25, unique=True)),
                ('description', models.TextField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200, verbose_name='Зголовок')),
                ('text', models.TextField(verbose_name='Текст поста')),
                ('pub_date', models.DateTimeField(auto_now_add=True, verbose_name='date published')),
                ('image', models.ImageField(blank=True, null=True, upload_to='posts', verbose_name='Картинка')),
                ('group', models.ForeignKey(help_text='Выберите группу, если хотите 😉', on_delete=django.db.models.deletion.CASCADE, related_name='posts', to='api.group', verbose_name='Группа')),
            ],
        ),
    ]
