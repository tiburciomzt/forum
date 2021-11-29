from django.shortcuts import render
from rest_framework import viewsets
from .serializers import Postsserializer
from .models import Posts

# Create your views here.
class PostsView(viewsets.ModelViewSet):
    serializer_class = Postsserializer
    queryset= Posts.objects.all()
