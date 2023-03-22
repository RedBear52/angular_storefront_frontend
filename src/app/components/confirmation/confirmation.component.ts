import { Component, Input } from '@angular/core'
import { CartService } from 'src/app/services/cart.service'
import { Checkout } from 'src/app/models/Checkout'
import { ActivatedRoute, ParamMap } from '@angular/router'
import { Product } from 'src/app/models/Product'

@Component({
    selector: 'app-confirmation',
    templateUrl: './confirmation.component.html',
    styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent {
    @Input() cart: Product[] = []
    saleDeetArray: string[] = []
    checkout: Checkout

    constructor(private cartService: CartService) {
        this.checkout = {
            fullName: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            cardNumber: '',
        }
    }

    ngOnInit(): void {
        this.cart = this.cartService.getCart()
        console.log(`Cart: `, this.cart)
    }

    // onChange() {
    //     this.checkout = this.cartService.showSaleDetails()
    // }
}
