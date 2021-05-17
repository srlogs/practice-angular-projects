import { Component } from '@angular/core';
import { Order } from '../model/order.model';
import { OrderRepository } from '../model/order.repository';

@Component({
    templateUrl: './orderTable.component.html'
})

export class OrderTableComponent {
    includeShipped: boolean = false;
    constructor(private repository: OrderRepository) { }

    getOrders(): Order[] {
        return this.repository.getOrders().filter(o => !o.shipped || this.includeShipped);
    }

    markShipped(order: Order) {
        order.shipped = true;
        this.repository.updateOrder(order);
    }

    delete(id: number = 0) {
        this.repository.deleteOrder(id);
    }
}