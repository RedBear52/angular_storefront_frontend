import { Component } from '@angular/core'
import { CartService } from 'src/app/services/cart.service'
import { Product } from 'src/app/models/Product'

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

    ngOnInit(): void {
        this.cartCount = this.cartService.getCartCount()
    }
}
