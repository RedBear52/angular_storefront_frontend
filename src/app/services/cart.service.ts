import { Injectable } from '@angular/core'
import { Product } from '../models/Product'

@Injectable({
    providedIn: 'root',
})
export class CartService {
    cart: Product[] = []
    cartQuantity: number
    total: number
    productQuantity: number

    constructor() {
        this.cartQuantity = 0
        this.total = 0
        this.productQuantity = 0
    }

    addToCart(product: Product) {
        this.cart.push(product)
        this.getCartCount()
        this.increment(product)
    }

    getCart(): Product[] {
        return this.cart
    }

    getCartItems(): Product[] {
        return this.cart
    }

    getCartCount(): number {
        this.cartQuantity = this.cart
            .map((product) => product.quantity)
            .reduce((a, b) => a + b, 0)
        return this.cartQuantity
    }

    increment(product: Product) {
        product.quantity += 1
        return this.cart
    }

    decrement(product: Product) {
        product.quantity -= 1
        return this.cart
    }

    getCartTotal() {
        this.total = this.cart
            .map((product) => product.price * product.quantity)
            .reduce((a, b) => a + b, 0)
        return this.total
    }

    clearCart(): Product[] {
        this.cart = []
        return this.cart
    }

    getProductQuantity(product: Product): number {
        console.log(product.quantity)
        return product.quantity
    }
}
