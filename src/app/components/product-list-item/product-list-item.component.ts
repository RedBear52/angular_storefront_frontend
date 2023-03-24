import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Product } from '../../models/Product'
import { ProductService } from '../../services/product.service'
import { Router } from '@angular/router'
import { MatDialog } from '@angular/material/dialog'
import { DialogBodyComponent } from 'src/app/dialog-body/dialog-body.component'

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
    cartItem: Product

    constructor(
        private productService: ProductService,
        private router: Router,
        public dialog: MatDialog
    ) {
        this.product = {
            id: 0,
            name: '',
            price: 0,
            quantity: 0,
            url: '',
            description: '',
        }

        this.cartItem = {
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

    openDialog(product: Product): void {
        this.dialog.open(DialogBodyComponent, {
            width: '300px',
        })
        this.onAddToCart(product)
    }
}
