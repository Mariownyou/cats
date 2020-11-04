from django.contrib import admin
from .models import Post, Group, Cat


class PostAdmin(admin.ModelAdmin):
    list_display = ('pk', 'text', 'pub_date',)
    search_fields = ('text',)
    list_filter = ('pub_date',)
    empty_value_display = '-пусто-'


class GroupAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'slug',)
    search_fields = ('title',)
    empty_value_display = '-пусто-'


class CatAdmin(admin.ModelAdmin):
    list_display = ('id', 'breed', 'age')
    search_fields = ('breed',)
    empty_value_display = '-пусто-'


admin.site.register(Post, PostAdmin)
admin.site.register(Group, GroupAdmin)
admin.site.register(Cat, CatAdmin)