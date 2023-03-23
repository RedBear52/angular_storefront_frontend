import { Component, Input } from '@angular/core'
import { CartService } from 'src/app/services/cart.service'
import { Product } from 'src/app/models/Product'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
    selector: 'app-confirmation',
    templateUrl: './confirmation.component.html',
    styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent {
    @Input() cart: Product[] = []
    fullName: string | null = ''
    address: string | null = ''
    city: string | null = ''
    state: string | null = ''
    zip: string | null = ''
    total: number | null

    constructor(
        private cartService: CartService,
        private route: ActivatedRoute
    ) {
        this.fullName = ''
        this.address = ''
        this.city = ''
        this.state = ''
        this.zip = ''
        this.total = 0

        // this.total = 0
    }

    ngOnInit() {
        this.cart = this.cartService.getCart()
        this.total = this.cartService.getCartTotal()
        // this.saleDeets = JSON.parse(localStorage.getItem('fullName') as any)
        // console.log(`Sale Deets: `, this.saleDeets)
        this.route.queryParamMap.subscribe((params) => {
            this.fullName = params.get('fullName')
            this.address = params.get('address')
            this.city = params.get('city')
            this.state = params.get('state')
            this.zip = params.get('zip')
            console.log(this.fullName)
            this.fullName = this.fullName as string

            // this.total = Number(params.get('total'))
        })
    }
}
