import { Component } from '@angular/core'
import { CartService } from 'src/app/services/cart.service'
import { Checkout } from 'src/app/models/Checkout'

@Component({
    selector: 'app-confirmation',
    templateUrl: './confirmation.component.html',
    styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent {
    saleDetails: Checkout

    constructor(private cartService: CartService) {
        this.saleDetails = {
            fullName: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            cardNumber: '',
        }
    }

    ngOnInit(): void {
        this.saleDetails = this.cartService.showSaleDetails()
    }

    // logDetails() {
    //     console.log(`Sale Details: `, this.saleDetails)
    // }
}
