import { Component } from '@angular/core'
import { Product } from '../../models/Product'
import { ProductService } from '../../services/product.service'
import { CartService } from '../../services/cart.service'

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
    product: Product
    products: Product[]

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
        this.products = []
    }

    ngOnInit(): void {
        this.productService.getProducts().subscribe((products) => {
            // for (let index = 0; index < products.length; index++) {
            //     const product = products[index]
            //     product['quantity'] += 1
            // }
            this.products = products
            // console.log(this.products)
        })
    }

    // addToCart(product: Product) {
    //     // console.log(product)
    //     this.cart.push(product)
    //     console.log(`Cart: `, this.cart)
    // }

    addToCart(product: Product) {
        product = this.productService.getProduct(product)
        this.cartService.addToCart(product)
    }

    //     getCart(): Product[] {
    //         return this.cart
    //     }
}
