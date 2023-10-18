import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  api_products = 'https://fakestoreapi.com';
  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get(this.api_products+"/products");
  }
}
