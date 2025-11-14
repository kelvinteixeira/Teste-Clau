from django.core.management.base import BaseCommand
from orders.models import Order, OrderItem
from datetime import date
from decimal import Decimal


class Command(BaseCommand):
    help = 'Create mock order data for testing'

    def handle(self, *args, **options):
        self.stdout.write(self.style.SUCCESS('Creating mock order data...'))
        
        # Create a sample order
        order = Order.objects.create(
            order_id='ORD-2025-001',
            status='production_ready',
            date=date.today(),
            total=Decimal('149.98')
        )
        
        # Create order items for this order
        item1 = OrderItem.objects.create(
            order=order,
            name='Wireless Bluetooth Headphones',
            quantity=1,
            price=Decimal('79.99')
        )
        
        item2 = OrderItem.objects.create(
            order=order,
            name='USB-C Charging Cable',
            quantity=2,
            price=Decimal('24.99')
        )
        
        item3 = OrderItem.objects.create(
            order=order,
            name='Phone Case',
            quantity=1,
            price=Decimal('19.99')
        )
        
        # Create another order
        order2 = Order.objects.create(
            order_id='ORD-2025-002',
            status='approved',
            date=date.today(),
            total=Decimal('89.97')
        )
        
        item4 = OrderItem.objects.create(
            order=order2,
            name='Laptop Stand',
            quantity=1,
            price=Decimal('45.99')
        )
        
        item5 = OrderItem.objects.create(
            order=order2,
            name='Wireless Mouse',
            quantity=1,
            price=Decimal('29.99')
        )
        
        item6 = OrderItem.objects.create(
            order=order2,
            name='Mouse Pad',
            quantity=1,
            price=Decimal('13.99')
        )
        
        # Create a canceled order
        order3 = Order.objects.create(
            order_id='ORD-2025-003',
            status='canceled',
            date=date.today(),
            total=Decimal('0.00')
        )
        
        self.stdout.write(
            self.style.SUCCESS(f'Successfully created {Order.objects.count()} orders with {OrderItem.objects.count()} items')
        )
        
        for order in Order.objects.all():
            self.stdout.write(f'Order {order.order_id}: {order.status} - ${order.total}')
            for item in order.items.all():
                self.stdout.write(f'  - {item.name} (qty: {item.quantity}) - ${item.price}')