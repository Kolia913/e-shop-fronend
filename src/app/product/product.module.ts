import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductShowComponent } from './product-show/product-show.component';
import {ProductService} from './common/service/product.service';
import {RouterModule} from '@angular/router';
import { ProductListByCategoryComponent } from './product-list-by-category/product-list-by-category.component';
import {CartModule} from '../cart/cart.module';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [ProductItemComponent, ProductListComponent, ProductShowComponent, ProductListByCategoryComponent, ProductAddComponent, ProductEditComponent],
    imports: [
        CommonModule,
        RouterModule,
        CartModule,
        ReactiveFormsModule
    ],
  exports: [
    ProductListComponent
  ],
  providers: [ProductService]
})
export class ProductModule { }
