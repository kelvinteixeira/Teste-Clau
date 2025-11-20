from rest_framework import serializers
from .models import Order

class OrderSerializer(serializers.ModelSerializer):
    products = serializers.SerializerMethodField()
    customer = serializers.SerializerMethodField()
    shipping = serializers.SerializerMethodField()
    payment = serializers.SerializerMethodField()
    breakdown = serializers.SerializerMethodField()

    class Meta:
        model = Order
        fields = [
            "id",
            "status",
            "date",
            "total",
            "products",
            "customer",
            "shipping",
            "payment",
            "breakdown",
        ]

    def get_products(self, obj):
        order_id = obj.id
        return [
            {
                "id": f"{order_id}-1",
                "name": "#Item001",
                "fragrance": "Custom Shape — AI, Full color, Fragrance — Vanilla, String color — White",
                "size": "8oz",
                "price": 24.99,
                "image": "/images/Frame1.png",
            },
            {
                "id": "DW983083694-2",
                "name": "#Item002",
                "fragrance": "Custom Shape — AI, Full color, Fragrance — Vanilla, String color — White",
                "size": "10ml x 3",
                "price": 89.99,
                "image": "/images/Frame2.png",
            },
            {
                "id": "DW983083694-3",
                "name": "#Item003",
                "fragrance": "Custom Shape — AI, Full color, Fragrance — Vanilla, String color — White",
                "size": "150ml",
                "price": 41.82,
                "image": "/images/Frame3.png",
            },
        ]

    def get_customer(self, obj):
        return {
            "name": "John Smith",
            "phone": "+1 (555) 123-4567",
            "address": "123 Main St, New York, NY 10001",
        }

    def get_shipping(self, obj):
        return {
            "method": "USPS — First",
            "duration": "3 business days",
            "estimatedDelivery": "2024-01-20",
        }

    def get_payment(self, obj):
        return {
            "method": "Credit Card",
            "last4": "4242",
        }

    def get_breakdown(self, obj):
      
        try:
            subtotal = float(obj.total or 0)
        except:
            subtotal = 0

        shipping = 9.99
        handling = 5.00
        tax = 12.54
        total = subtotal + shipping + handling + tax

        return {
            "items": subtotal,
            "shipping": shipping,
            "handling": handling,
            "tax": tax,
            "total": total,
        }
