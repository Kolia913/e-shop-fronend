import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoryDropdownListComponent} from './category/category-dropdown-list/category-dropdown-list.component';
import {ProductShowComponent} from './product/product-show/product-show.component';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductListByCategoryComponent} from './product/product-list-by-category/product-list-by-category.component';
import {CartListComponent} from './cart/cart-list/cart-list.component';
import {LoginComponent} from './admin/login/login.component';
import {MainComponent} from './admin/main/main.component';
import {environment} from '../environments/environment';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductListComponent,
  },
  {
    path: 'products/:id',
    component: ProductShowComponent
  },
  {
    path: 'category/:id',
    component: ProductListByCategoryComponent
  },
  {
    path: 'cart',
    component: CartListComponent
  },
  {
    path: 'admin',
    component: LoginComponent,
  },
  {
    path: 'admin/main',
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
