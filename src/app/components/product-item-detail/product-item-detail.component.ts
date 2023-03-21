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
}
