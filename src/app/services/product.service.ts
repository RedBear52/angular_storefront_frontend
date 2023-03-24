import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Product } from '../models/Product'

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    productDetailItem: Product

    constructor(private http: HttpClient) {
        this.productDetailItem = {
            id: 0,
            name: '',
            price: 0,
            quantity: 0,
            url: '',
            description: '',
        }
    }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>('../assets/data.json')
    }

    getProduct(product: Product): Product {
        return product
    }

    storeClickedProduct(product: Product): Product {
        this.productDetailItem = product
        return this.productDetailItem
    }

    showProductDetailItem(): Product {
        return this.productDetailItem
    }
}
