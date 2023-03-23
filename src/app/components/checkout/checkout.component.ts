import { Component, Output, EventEmitter } from '@angular/core'
import { Router } from '@angular/router'

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
        // console.log(`Full Name: ${this.fullName}`)
        // console.log(`Address: ${this.address}`)
        // console.log(`City: ${this.city}`)
        // console.log(`State: ${this.state}`)
        // console.log(`Zip: ${this.zip}`)
        // console.log(`Card Name: ${this.cardNumber}`)

        const saleDetails: any = {
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

        this.onCheckout.emit(saleDetails)
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
