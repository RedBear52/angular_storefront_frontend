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
    // productQuantity: number
    saleDetails: Checkout

    constructor(private router: Router) {
        this.cartQuantity = 0
        this.total = 0
        // this.productQuantity = 0
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
        console.log(product)
        if (this.cart.includes(product)) {
            return this.cart
        } else {
            this.cart.push(product)

            return this.cart
        }
        alert(
            `${product.quantity} ${product.name} has been added to your cart!`
        )
    }

    removeProductFromCart(product: Product): Product[] {
        const index = this.cart.indexOf(product)
        this.cart.splice(index, 1)
        return this.cart
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

    confirmSale(saleDetails: Checkout): Checkout {
        console.log(`saleDetails: `, saleDetails)
        this.saleDetails = saleDetails

        localStorage.setItem('sale_info', JSON.stringify(saleDetails))

        // alert(`Thank you for your purchase!

        // Your order will be shipped to:
        // ${saleDetails.fullName}
        // ${saleDetails.address}
        // ${saleDetails.city}, ${saleDetails.state} ${saleDetails.zip}

        // Your total was: $${this.getCartTotal()}

        // Thank you for shopping with us!
        //         `)

        const currSaleInfo = {
            fullName: saleDetails.fullName,
            address: saleDetails.address,
            city: saleDetails.city,
            state: saleDetails.state,
            zip: saleDetails.zip,
            cardNumber: saleDetails.cardNumber,
        }
        console.log(saleDetails)
        this.router.navigate([`/confirmation`], {
            queryParams: {
                fullName: saleDetails.fullName,
                address: saleDetails.address,
                city: saleDetails.city,
                state: saleDetails.state,
                zip: saleDetails.zip,
            },
        })

        return currSaleInfo
    }
}
