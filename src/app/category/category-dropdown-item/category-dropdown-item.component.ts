import {Component, Input, OnInit} from '@angular/core';
import {CategoryModel} from '../common/model/category.model';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-category-dropdown-item',
  templateUrl: './category-dropdown-item.component.html',
  styleUrls: ['./category-dropdown-item.component.scss']
})
export class CategoryDropdownItemComponent implements OnInit {
  @Input() category: CategoryModel
  isAdmin = environment.isAdmin
  constructor() { }

  ngOnInit() {
  }

}
