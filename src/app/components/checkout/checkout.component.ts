import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { Checkout } from '../../models/Checkout'
import { CartService } from '../../services/cart.service'

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
    fullName: string
    address: string
    city: string
    state: string
    zip: string
    cardNumber: string

    constructor(private cartService: CartService, private router: Router) {
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
