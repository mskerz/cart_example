import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/model/products.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart_products =Array<Products>();
  total=0;
  constructor(private cartService: CartService) {
    this.cart_products = this.cartService.getCart();
  }
  ngOnInit() {
     this.getTotal();
     this.updateCart();
  }
  removeFromCart(product: Products) {
    this.cartService.removeItemFromCart(product);
    this.getTotal();
  }

  increment_product(product: Products) {
    product.quantity_order++;
    this.getTotal();
    this.updateCart();
  }
  decremend_product(product: Products) {
    if(product.quantity_order>0){
      product.quantity_order--;
      this.getTotal();
      this.updateCart();
     }
    if(product.quantity_order===0){
      this.cartService.removeItemFromCart(product);
    }
  }

  updateCart() {
    this.cartService.saveCartToLocalStorage();
  }
  async ConfirmCancelOrder(){
    const confirm = await  window.confirm("Are you sure for cancel order");
    if (confirm) {
      
      if(this.cart_products.length===0){
        window.alert("don't have any products in your cart");
      
      }else{
        this.CancelOrder();
        window.alert("Deleted order !!");
      }
    } 
  }
  CancelOrder() {
    this.cartService.resetCart();
    this.cart_products =this.cartService.getCart();
    this.getTotal();

  }
  getTotal() {
    this.total = this.cartService.getCart().reduce((acc, product) => acc + (product.price * product.quantity_order), 0);
  }
}
