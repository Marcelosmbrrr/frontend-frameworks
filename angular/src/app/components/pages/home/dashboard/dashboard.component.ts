import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface IProduct {
  id: string,
  brand: string,
  category: string,
  description: string,
  image: string
}

type IData = Array<IProduct>

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  products?: IData;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    const response = await this.http.get<any>("https://dummyjson.com/products?limit=6").toPromise();
    this.products = response.products.map((product: any, index: number) => {
      return {
        id: product.id,
        brand: product.brand,
        category: product.category,
        description: product.description,
        image: product.images[0]
      }
    });
  }

}
