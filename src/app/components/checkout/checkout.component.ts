import { Component, Output, EventEmitter } from '@angular/core'
import { Router } from '@angular/router'
import { Checkout } from '../../models/Checkout'

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
    @Output() onCheckout: EventEmitter<any> = new EventEmitter()

    fullName: string
    address: string
    city: string
    state: string
    zip: string
    cardNumber: string

    constructor(private router: Router) {
        this.fullName = ''
        this.address = ''
        this.city = ''
        this.state = ''
        this.zip = ''
        this.cardNumber = ''
    }

    onSubmit() {
        const saleDetails: Checkout = {
            fullName: this.fullName,
            address: this.address,
            city: this.city,
            state: this.state,
            zip: this.zip,
            cardNumber: this.cardNumber,
        }
        this.router.navigate(['/confirmation'], {
            queryParams: saleDetails,
        })
        this.clearCheckoutForm()
    }

    clearCheckoutForm() {
        this.fullName = ''
        this.address = ''
        this.city = ''
        this.state = ''
        this.zip = ''
        this.cardNumber = ''
    }
}
