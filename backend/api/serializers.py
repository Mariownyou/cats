from rest_framework import serializers
from .models import Post, Cats


class PostSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'

    
class CatsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Cats
        fields = '__all__'
