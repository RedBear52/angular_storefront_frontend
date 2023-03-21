import { Component } from '@angular/core'
import { Product } from '../../models/Product'
import { CartService } from '../../services/cart.service'

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
})
export class CartComponent {
    cart: Product[] = []

    constructor(private cartService: CartService) {}

    ngOnInit(): void {
        this.cart = this.cartService.getCart()
    }
}
