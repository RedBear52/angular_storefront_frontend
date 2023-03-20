import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Product } from '../../models/Product'
import { ProductService } from '../../services/product.service'

@Component({
    selector: 'app-product-list-item',
    templateUrl: './product-list-item.component.html',
    styleUrls: ['./product-list-item.component.css'],
})
export class ProductListItemComponent {
    @Input() product: Product
    @Output() onAddProductToCart: EventEmitter<Product> = new EventEmitter()

    constructor(private productService: ProductService) {
        this.product = {
            id: 0,
            name: '',
            price: 0,
            quantity: 0,
            url: '',
            description: '',
        }
    }

    ngOnInit(): void {}

    onAddToCart(product: Product): void {
        // console.log(
        //     `onAddToCart(product) method has been called by button click and emitted the following product info:
        //     ${product.name}
        //     ${product.price}
        //     ${product.description}
        //     `
        // )
        this.onAddProductToCart.emit(product)
    }

    onSelect(product: Product): void {
        // console.log(product)
        this.productService.storeClickedProduct(product)
    }
}
