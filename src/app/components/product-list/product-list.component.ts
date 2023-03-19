import { Component } from '@angular/core'
import { Product } from '../../models/Product'
import { ProductService } from '../../services/product.service'

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
    products: Product[]

    constructor(private productService: ProductService) {
        this.products = []
    }

    ngOnInit(): void {
        this.productService.getProducts().subscribe((products) => {
            this.products = products
        })
    }

    addToCart(product: Product): void {
        this.productService.addToCart(product)
    }
}
