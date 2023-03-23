import { Component } from '@angular/core'
import { Product } from '../../models/Product'
import { ProductService } from '../../services/product.service'
import { CartService } from '../../services/cart.service'

@Component({
    selector: 'app-product-item-detail',
    templateUrl: './product-item-detail.component.html',
    styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent {
    product: Product
    cart: Product[]
    cartTotal: number
    cartTotalString: string

    constructor(
        private productService: ProductService,
        private cartService: CartService
    ) {
        this.product = {
            id: 0,
            name: '',
            price: 0,
            quantity: 0,
            url: '',
            description: '',
        }

        this.cart = []
        this.cartTotal = 0
        this.cartTotalString = ''
    }

    ngOnInit(): void {
        this.product = this.productService.showProductDetailItem()
    }

    onAddToCart(product: Product) {
        // console.log(product)
        this.cartService.addToCart(product)
    }

    getCart(): Product[] {
        return this.cartService.getCart()
    }

    getProductQuantity(product: Product): number {
        return this.cartService.getProductQuantity(product)
    }

    onChangeQuantity(product: Product, quantity: number) {
        console.log(`quantity: `, product)

        this.cartService.changeQuantity(product, quantity)
    }

    onDecrement(product: Product): void {
        if (product.quantity > 1) {
            this.cartService.decrement(product)
            this.cartService.getCartTotal()
        } else if (product.quantity === 1) {
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
