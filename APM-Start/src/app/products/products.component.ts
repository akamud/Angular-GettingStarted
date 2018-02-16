import { Component } from '@angular/core'
import { IProduct } from './product'

@Component({
  selector: 'pm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: IProduct[]
  filteredProducts: IProduct[]
  imageWidth: number = 50
  showImage: boolean = false
  _listFilter: string

  get listFilter(): string {
    return this._listFilter
  }

  set listFilter(value: string) {
    this._listFilter = value
    this.filteredProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.products
  }

  constructor() {
    this.products = [
      {
        productId: 1,
        productName: 'Leaf Rake',
        productCode: 'GDN-0011',
        releaseDate: 'March 19, 2016',
        description: 'Leaf rake with 48-inch wooden handle.',
        price: 19.95,
        starRating: 3.2,
        imageUrl:
          'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
      },
      {
        productId: 2,
        productName: 'Garden Cart',
        productCode: 'GDN-0023',
        releaseDate: 'March 18, 2016',
        description: '15 gallon capacity rolling garden cart',
        price: 32.99,
        starRating: 4.2,
        imageUrl:
          'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
      }
    ]
    this.filteredProducts = this.products
  }

  toggleImage(): void {
    this.showImage = !this.showImage
  }

  performFilter(filter: string): IProduct[] {
    filter = filter.toLocaleLowerCase()
    return this.products.filter(p => p.productName.toLocaleLowerCase().includes(filter))
  }
}
