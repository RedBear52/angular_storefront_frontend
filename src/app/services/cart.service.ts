import { Injectable } from '@angular/core'
import { Product } from '../models/Product'
import { Checkout } from '../models/Checkout'
import { Router } from '@angular/router'

@Injectable({
    providedIn: 'root',
})
export class CartService {
    cart: Product[] = []
    cartQuantity: number
    total: number
    saleDetails: Checkout

    constructor(private router: Router) {
        this.cartQuantity = 0
        this.total = 0
        this.saleDetails = {
            fullName: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            cardNumber: '',
        }
    }

    addToCart(product: Product) {
        if (this.cart.includes(product)) {
            return this.cart
        } else {
            this.cart.push(product)

            return this.cart
        }
    }

    removeProductFromCart(product: Product): Product[] {
        const index = this.cart.indexOf(product)
        this.cart.splice(index, 1)
        return this.cart
    }

    getCart(): Product[] {
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
        this.total = parseFloat(this.total.toFixed(2))
        return this.total
    }

    clearCart(): Product[] {
        this.cart = []
        return this.cart
    }

    getProductQuantity(product: Product): number {
        return product.quantity
    }

    changeQuantity(product: Product, quantity: number) {
        product.quantity = quantity
        this.getProductQuantity(product)
    }
}
