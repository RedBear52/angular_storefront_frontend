import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component'
import { ProductListComponent } from './components/product-list/product-list.component'
import { CartComponent } from './components/cart/cart.component'
import { CheckoutComponent } from './components/checkout/checkout.component'
import { ConfirmationComponent } from './components/confirmation/confirmation.component'

const routes: Routes = [
    { path: '', component: ProductListComponent },
    { path: 'product-detail', component: ProductItemDetailComponent },
    { path: 'cart', component: CartComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'confirmation', component: ConfirmationComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
