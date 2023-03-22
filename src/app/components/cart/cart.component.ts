import { Component, Input } from '@angular/core'
import { Product } from '../../models/Product'
import { CartService } from '../../services/cart.service'
import { Checkout } from '../../models/Checkout'

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
})
export class CartComponent {
    checkout: Checkout
    cart: Product[] = []

    constructor(private cartService: CartService) {
        this.checkout = {
            fullName: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            cardNumber: '',
        }
    }

    ngOnInit(): void {
        this.cart = this.cartService.getCart()

        console.log(`Cart: `, this.cart)
    }

    onConfirmSale(saleDetails: Checkout) {
        this.checkout = this.cartService.confirmSale(saleDetails)
        console.log(`Checkout: `, this.checkout)
    }
}
