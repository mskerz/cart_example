import { Injectable } from '@angular/core';
import { Products } from '../model/products.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = Array<Products>();
  cartUpdated = new Subject<void>();
  constructor() { 
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      this.cart = JSON.parse(cartData);
    }
  }

  addProducttoCart(product: Products){
    const existItem = this.cart.find((cartItem)=>cartItem.id === product.id);
    if(existItem) {
       existItem.quantity_order++;
    }else{
      const itemToAdd = { ...product, quantity_order: 1 };
      this.cart.push(itemToAdd);
    }
    this.saveCartToLocalStorage();
    this.cartUpdated.next();
  }
  getCart():Products[]{
    return this.cart;
  }

 

  removeItemFromCart(item: Products) {
    const index = this.cart.indexOf(item);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
    if (this.cart.length === 0) {
      this.clearCartFromLocalStorage();
    } else {
      this.saveCartToLocalStorage();
    }
    this.cartUpdated.next();
  }

  resetCart() {
    this.cart = [];
    this.clearCartFromLocalStorage();
    this.cartUpdated.next();
  }



  hasProductsInCart(): boolean {
    return this.cart.length > 0;
  }
  saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  };

  clearCartFromLocalStorage() {
    localStorage.removeItem('cart');
  };
}
