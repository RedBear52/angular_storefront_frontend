import { Injectable } from '@angular/core'
import { Product } from '../models/Product'
import { Checkout } from '../models/Checkout'

@Injectable({
    providedIn: 'root',
})
export class CartService {
    cart: Product[] = []
    cartQuantity: number
    total: number
    productQuantity: number
    saleDetails: Checkout

    constructor() {
        this.cartQuantity = 0
        this.total = 0
        this.productQuantity = 0
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

    changeQuantity(product: Product, quantity: number) {
        console.log(`Product quantity: `, quantity)
        product.quantity = quantity
        this.getProductQuantity(product)
    }

    confirmSale(saleDetails: Checkout) {
        console.log(`saleDetails: `, saleDetails)

        alert(`Thank you for your purchase!
        Your order has been placed.
        Your order will be shipped to:
        ${saleDetails.fullName}
        ${saleDetails.address}
        ${saleDetails.city}, ${saleDetails.state} ${saleDetails.zip}

        Your total was: $${this.getCartTotal()}
            
        Thank you for shopping with us!
                `)
        this.saleDetails = saleDetails
        return this.showSaleDetails()
    }

    showSaleDetails(): Checkout {
        console.log(`Sale Details: `, this.saleDetails)
        const saleDeetKeys = Object.keys(this.saleDetails)
        console.log(`Sale Details Keys: `, saleDeetKeys)
        const saleDeetValues = Object.values(this.saleDetails)
        console.log(`Sale Details Values: `, saleDeetValues)

        return this.saleDetails
    }
}
