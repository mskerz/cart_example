import { Component, OnInit } from '@angular/core';
import { Products,Convert as ProductConvert } from 'src/app/model/products.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

products = Array<Products>();
constructor(private productService: ProductsService,private cartService: CartService) {
  
}
ngOnInit() {
    this.fetchProduct();
}
fetchProduct() {
  this.productService.getProducts().subscribe((data)=>{
      this.products  = ProductConvert.toProducts(JSON.stringify(data));
  });
}

addToCart(item:Products){
  this.cartService.addProducttoCart(item);
}
}
