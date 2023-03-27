import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Product } from '../../models/Product'
import { Checkout } from '../../models/Checkout'
import { CartService } from '../../services/cart.service'

@Component({
    selector: 'app-cart-item',
    templateUrl: './cart-item.component.html',
    styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
    @Input() product: Product
    @Input() cart: Product[] = []
    @Input() checkout: Checkout
    @Input() cartTotal: number
    @Input() cartTotalString: string
    quantity: number

    constructor(private cartService: CartService) {
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

        this.cartTotal = 0
        this.cartTotalString = ''
        this.quantity = 0
    }

    ngOnInit(): void {
        this.quantity = this.cartService.getProductQuantity(this.product)
    }

    quantityChange(value: number, product: Product): void {
        // this.product.quantity = this.cartService.getProductQuantity(product)
        console.log(`Value: `, value)
        console.log(`Quantity: `, this.quantity)
        console.log(`Product: `, product)
        console.log(`Product Quantity: `, product.quantity)

        if (product.quantity > value) {
            console.log(`Decrementing ${this.product.name} by 1`)
            this.onDecrement(product)
            this.quantity = value
            console.log(this.quantity)
        } else if (product.quantity < value) {
            console.log(`Incrementing ${this.product.name} by 1`)
            this.onIncrement(product)
            this.quantity = value
        }
    }

    onDecrement(product: Product): void {
        if (product.quantity > 1) {
            this.cartService.decrement(product)
            this.cartService.getCartTotal()
        } else if (product.quantity === 1) {
            alert(`Removing ${product.name} from your cart!

To add this item back to your cart, click the "Keep Shopping" button, 
navigate back to the ${product.name} display, and click the "Add to Cart" button.`)
            this.cartService.removeProductFromCart(product)
        }
        this.cartTotal = this.cartService.getCartTotal()
        this.cartTotalString = this.cartTotal.toFixed(2)
    }

    onIncrement(product: Product): void {
        this.cartService.increment(product)
        this.cartService.addToCart(product)
        this.cartTotalString = this.cartService.getCartTotal().toFixed(2)
        this.cartTotal = this.cartService.getCartTotal()
    }
}
