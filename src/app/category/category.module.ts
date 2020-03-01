import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoryService} from './common/service/category.service';
import { CategoryDropdownListComponent } from './category-dropdown-list/category-dropdown-list.component';
import {HttpClientModule} from '@angular/common/http';
import { CategoryDropdownItemComponent } from './category-dropdown-item/category-dropdown-item.component';
import {RouterModule} from '@angular/router';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';



@NgModule({
  declarations: [CategoryDropdownListComponent, CategoryDropdownItemComponent, CategoryAddComponent, CategoryEditComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule
    ],
  providers: [CategoryService],
  exports: [CategoryDropdownListComponent]
})
export class CategoryModule { }
