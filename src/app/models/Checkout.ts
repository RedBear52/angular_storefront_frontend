export class Checkout {
    fullName: string
    address: string
    city: string
    state: string
    zip: string
    cardNumber: string

    constructor() {
        this.fullName = ''
        this.address = ''
        this.city = ''
        this.state = ''
        this.zip = ''
        this.cardNumber = ''
    }
}
