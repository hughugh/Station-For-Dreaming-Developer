from django.db import models

class Mentor(models.Model):
    auto_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=10)
    company = models.CharField(max_length=20)
    dev_category = models.CharField(max_length = 10)
    url = models.CharField(max_length = 254, blank = True)
    content = models.TextField()
    image = models.ImageField(upload_to="img")

# Create your models here.
