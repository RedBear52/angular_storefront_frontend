import { Component } from '@angular/core'
import { CartService } from 'src/app/services/cart.service'

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
    cartCount: number

    constructor(private cartService: CartService) {
        this.cartCount = 0
    }

    getCartCount() {
        this.cartCount = this.cartService.getCartCount()
        console.log(`Cart Count: `, this.cartCount)

        return this.cartCount
    }
}
