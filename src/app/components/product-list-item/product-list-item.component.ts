import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Product } from '../../models/Product'
import { ProductService } from '../../services/product.service'
import { Router } from '@angular/router'

@Component({
    selector: 'app-product-list-item',
    templateUrl: './product-list-item.component.html',
    styleUrls: ['./product-list-item.component.css'],
})
export class ProductListItemComponent {
    @Input() product: Product
    @Output() onAddProductToCart: EventEmitter<Product> = new EventEmitter()
    cart: Product[] = []
    name: string = ''
    price: number = 0
    description: string = ''
    url: string = ''
    quantity: number = 0

    constructor(
        private productService: ProductService,
        private router: Router
    ) {
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
        this.onAddProductToCart.emit(product)
    }

    onSelect(product: Product): void {
        this.productService.storeClickedProduct(product)
        const id = this.product.id

        this.router.navigate(['/product-detail'], {
            queryParams: { id },
        })
    }
}
