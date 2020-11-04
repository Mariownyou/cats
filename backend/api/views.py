from rest_framework import viewsets
from rest_framework import permissions
from .serializers import PostSerializer, CatSerializer, GroupSerializer

from .models import Post, Cat, Group
from django_filters import rest_framework as filters


class PostFilter(filters.FilterSet):
    # group = filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = Post
        fields = ('id', 'group')


class PostViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows posts to be viewed or edited.
    """
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    filterset_class = PostFilter


class CatViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows posts to be viewed or edited.
    """
    queryset = Cat.objects.all()
    serializer_class = CatSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows posts to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
