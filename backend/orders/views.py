from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import OrderSerializer
from .models import Order


class OrderListView(APIView):
    def get(self, request):
        # Criamos um Order falso só para passar no serializer
        fake_order = Order(
            id=1,
            status="production_ready",
            date="2024-01-14",
            total=156.80,
        )

        serializer = OrderSerializer(fake_order)

        # Retorna como lista para combinar com o front
        return Response([serializer.data])
