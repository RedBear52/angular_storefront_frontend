import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ProductListComponent } from './components/product-list/product-list.component'
import { ProductListItemComponent } from './components/product-list-item/product-list-item.component'
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component'
import { NavBarComponent } from './components/nav-bar/nav-bar.component'
import { CartComponent } from './components/cart/cart.component'
import { CartItemComponent } from './components/cart-item/cart-item.component'
import { FormsModule } from '@angular/forms'
import { CheckoutComponent } from './components/checkout/checkout.component'
import { ConfirmationComponent } from './components/confirmation/confirmation.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatSelectModule } from '@angular/material/select'
import { MatBadgeModule } from '@angular/material/badge'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatDialogModule } from '@angular/material/dialog'
import { DialogBodyComponent } from './dialog-body/dialog-body.component'
import { MatTabsModule } from '@angular/material/tabs'
import { MatStepperModule } from '@angular/material/stepper'
import { MatTestComponent } from './testFolder/mat-test/mat-test.component'
import { FooterComponent } from './components/footer/footer.component'
import { MatGridListModule } from '@angular/material/grid-list'

@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        ProductListItemComponent,
        ProductItemDetailComponent,
        NavBarComponent,
        CartComponent,
        CartItemComponent,
        CheckoutComponent,
        ConfirmationComponent,
        DialogBodyComponent,
        MatTestComponent,
        FooterComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatSelectModule,
        MatBadgeModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatTabsModule,
        MatStepperModule,
        MatGridListModule,
    ],
    exports: [
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatSelectModule,
        MatBadgeModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatTabsModule,
        MatStepperModule,
        MatGridListModule,
    ],

    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
