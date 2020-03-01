import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import {ProductModule} from '../product/product.module';
import {CategoryModule} from '../category/category.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FormDataService} from '../common/service/form-data.service';



@NgModule({
  declarations: [LoginComponent, MainComponent],
  imports: [
    CommonModule,
    ProductModule,
    CategoryModule,
    ReactiveFormsModule
  ],
  providers: [FormDataService],
})
export class AdminModule { }
