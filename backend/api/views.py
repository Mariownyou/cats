from rest_framework import viewsets
from rest_framework import permissions
from .serializers import PostSerializer, CatsSerializer

from .models import Post, Cats


class PostViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows posts to be viewed or edited.
    """
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class CatsViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows posts to be viewed or edited.
    """
    queryset = Cats.objects.all()
    serializer_class = CatsSerializer
