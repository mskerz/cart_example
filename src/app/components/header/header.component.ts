import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartItemCount: number = 0;

constructor(private cart:CartService) {
  this.cartItemCount = this.cart.getCart().length;
}
  ngOnInit() {
    this.cart.cartUpdated.subscribe(() => {
      this.cartItemCount = this.cart.getCart().length;
    });
  }


  IsCartEmpty(){
    return this.cartItemCount === 0;
  }


}
