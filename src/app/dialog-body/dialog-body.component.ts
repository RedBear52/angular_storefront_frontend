import { Component, Input } from '@angular/core'
import { Product } from '../models/Product'

@Component({
    selector: 'app-dialog-body',
    templateUrl: './dialog-body.component.html',
    styleUrls: ['./dialog-body.component.css'],
})
export class DialogBodyComponent {
    @Input() product: Product
    constructor() {
        this.product = {
            id: 0,
            name: '',
            price: 0,
            quantity: 0,
            url: '',
            description: '',
        }
    }
}
