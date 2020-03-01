import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {CategoryModule} from './category/category.module';
import {ProductModule} from './product/product.module';
import {CartModule} from './cart/cart.module';
import {AdminModule} from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CategoryModule,
        ProductModule,
        CartModule,
        AdminModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
