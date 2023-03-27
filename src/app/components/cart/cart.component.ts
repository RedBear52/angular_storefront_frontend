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
    saleDetails: Checkout
    cartTotal: number
    cartTotalString: string

    constructor(private cartService: CartService) {
        this.checkout = {
            fullName: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            cardNumber: '',
        }

        this.saleDetails = {
            fullName: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            cardNumber: '',
        }
        this.cartTotal = 0
        this.cartTotalString = ''
    }

    ngOnInit(): void {
        this.cart = this.cartService.getCart()
        this.cartTotal = this.cartService.getCartTotal()
    }

    onCheckout() {
        this.cartService.clearCart()
        this.cart = this.cartService.getCart()
    }

    getCartTotal() {
        return (this.cartTotalString = this.cartService
            .getCartTotal()
            .toFixed(2))
    }
}
