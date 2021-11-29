from django.db.models import fields
from rest_framework import serializers
from .models import Posts

class Postsserializer(serializers.ModelSerializer):
    class Meta:
        model= Posts
        fields= ('id', 'title', 'description', 'date', 'autor')