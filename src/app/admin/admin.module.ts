import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import {ProductModule} from '../product/product.module';
import {CategoryModule} from '../category/category.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FormDataService} from '../common/service/form-data.service';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [LoginComponent, MainComponent],
    imports: [
        CommonModule,
        ProductModule,
        CategoryModule,
        ReactiveFormsModule,
        RouterModule
    ],
  providers: [FormDataService],
})
export class AdminModule { }
