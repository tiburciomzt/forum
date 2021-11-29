from django.contrib import admin
from .models import Posts

# Register your models here.

class PostsAdmin(admin.ModelAdmin):
    list_display=('title','description', 'date')

admin.site.register(Posts, PostsAdmin)