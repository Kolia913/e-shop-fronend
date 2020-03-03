import {Component, Input, OnInit} from '@angular/core';
import {CategoryModel} from '../common/model/category.model';
import {environment} from '../../../environments/environment';
import {CategoryService} from '../common/service/category.service';

@Component({
  selector: 'app-category-dropdown-item',
  templateUrl: './category-dropdown-item.component.html',
  styleUrls: ['./category-dropdown-item.component.scss']
})
export class CategoryDropdownItemComponent implements OnInit {
  @Input() category: CategoryModel
  isAdmin = environment.isAdmin
  constructor(private readonly categoryService: CategoryService) { }

  ngOnInit() {
  }

  removeCategory(id: string): void {
    this.categoryService.remove(id).subscribe(console.log)
  }


}
