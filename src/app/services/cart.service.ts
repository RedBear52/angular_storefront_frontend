import { Injectable } from '@angular/core'
import { Product } from '../models/Product'
import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class CartService {
    cart: Product[] = []

    constructor() {}

    addToCart(product: Product) {
        this.cart.push(product)
        console.log(`Cart: `, this.cart)
    }

    getCart(): Product[] {
        return this.cart
    }

    getCartItems(): Product[] {
        return this.cart
    }

    getCartCount(): number {
        return this.cart.length
    }
}
