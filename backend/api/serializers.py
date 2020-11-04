from rest_framework import serializers
from .models import Post, Cat, Group


class PostSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Post
        fields = ('url', 'id', 'title', 'text', 'group', 'pub_date', 'image')

    
class CatSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Cat
        fields = ('url', 'id', 'breed', 'age', 'image')

    
class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'id', 'title', 'slug', 'description', 'image')
