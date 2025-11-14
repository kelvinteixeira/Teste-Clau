from django.db import models
from datetime import date

class Order(models.Model):
    STATUS_CHOICES = [
        ('production_ready', 'Production Ready'),
        ('approved', 'Approved'),
        ('canceled', 'Canceled'),
    ]

    order_id = models.CharField(max_length=50, unique=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES)
    date = models.DateField(default=date.today)
    total = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.order_id} - {self.status}"


class OrderItem(models.Model):
    order = models.ForeignKey(Order, related_name='items', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    quantity = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name
