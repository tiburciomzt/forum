from django.db import models

# Create your models here.
class Posts(models.Model):
    title=models.CharField(max_length=200)
    description= models.TextField()
    date= models.DateField()
    autor=models.CharField(max_length=100, null=True)
   

    def __str__(self):
        return self.title
