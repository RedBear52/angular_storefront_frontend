import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductListItemComponent } from './components/product-list-item/product-list-item.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component'

@NgModule({
    declarations: [AppComponent, ProductListComponent, ProductListItemComponent, ProductItemDetailComponent, NavBarComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
