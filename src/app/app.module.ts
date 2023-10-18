import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './page/main/main.component';
import { ProductsComponent } from './page/products/products.component';
import { MatMenuModule } from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { BadgeModule } from 'primeng/badge';
import { TableModule } from 'primeng/table';
import { HomepageComponent } from './page/homepage/homepage.component';
import { ButtonModule } from 'primeng/button';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CartComponent } from './page/cart/cart.component'; 
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ProductsComponent,
    HomepageComponent,
    CartComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,FormsModule,
    BrowserAnimationsModule,
    MatMenuModule,MatIconModule,BadgeModule,TableModule,ButtonModule,MatCardModule,MatButtonModule,DataViewModule,
    RatingModule,TagModule,InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
