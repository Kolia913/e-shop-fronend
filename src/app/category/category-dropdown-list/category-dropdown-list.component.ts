import {Component, Input, OnInit} from '@angular/core';
import {CategoryService} from '../common/service/category.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-category-dropdown-list',
  templateUrl: './category-dropdown-list.component.html',
  styleUrls: ['./category-dropdown-list.component.scss']
})
export class CategoryDropdownListComponent implements OnInit {
  constructor(private readonly categoryService: CategoryService) { }

  ngOnInit() {
  }

}
