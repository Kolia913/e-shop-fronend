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
import {ProductAddComponent} from './product/product-add/product-add.component';
import {CategoryAddComponent} from './category/category-add/category-add.component';
import {ProductEditComponent} from './product/product-edit/product-edit.component';
import {CategoryEditComponent} from './category/category-edit/category-edit.component';
import {NotFoundComponent} from './not-found/not-found.component';


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
    component: MainComponent,
    children: [{
      path: 'add-product',
      component: ProductAddComponent
    },
      {
        path: 'add-category',
        component: CategoryAddComponent
      },
      {
        path: 'edit-product/:id',
        component: ProductEditComponent
      },
      {
        path: 'edit-category/:id',
        component: CategoryEditComponent
      }]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
