import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './cart-list/cart-list.component';
import {CartService} from './common/service/cart.service';
import { CartItemComponent } from './cart-item/cart-item.component';



@NgModule({
  declarations: [CartListComponent, CartItemComponent],
  imports: [
    CommonModule
  ],
  providers: [CartService],
  exports: [CartListComponent]
})
export class CartModule { }
