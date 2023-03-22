import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Product } from '../../models/Product'
import { Checkout } from '../../models/Checkout'

@Component({
    selector: 'app-cart-item',
    templateUrl: './cart-item.component.html',
    styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
    @Input() product: Product
    @Input() cart: Product[] = []
    @Input() checkout: Checkout
    // @Output() onAddToCart: EventEmitter<Product> = new EventEmitter()

    constructor() {
        this.product = {
            id: 0,
            name: '',
            price: 0,
            quantity: 0,
            url: '',
            description: '',
        }

        this.checkout = {
            fullName: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            cardNumber: '',
        }
    }

    ngOnInit(): void {}

    onAddToCart(product: Product): void {
        // this.onAddToCart.emit(product)
    }
}
