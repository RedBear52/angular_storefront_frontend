import { Component } from '@angular/core'
import { CartService } from 'src/app/services/cart.service'

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
    cartCount: number
    hidden: boolean = true

    constructor(private cartService: CartService) {
        this.cartCount = 0
    }

    getCartCount() {
        this.cartCount = this.cartService.getCartCount()
        return this.cartCount
    }

    toggleBadgeViz(hidden: boolean) {
        if (this.cartCount > 0) {
            this.hidden = false
            return this.hidden
        } else {
            this.hidden = true
            return this.hidden
        }
    }
}
