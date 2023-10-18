import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './page/main/main.component';
import { ProductsComponent } from './page/products/products.component';
import { HomepageComponent } from './page/homepage/homepage.component';
import { CartComponent } from './page/cart/cart.component';

const routes: Routes = [
  {path:'',component:MainComponent,children:[
    {path:'',component:HomepageComponent},
    {path:'products',component:ProductsComponent,title:'Products'},
    {path:'cart',component:CartComponent,title:'ตะกร้าสินค้า'}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
