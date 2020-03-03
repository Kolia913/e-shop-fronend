import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../common/service/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit {
  categoryAdd: FormGroup;

  constructor(private readonly formBuilder: FormBuilder,
              private readonly categoryService: CategoryService) {
    this.categoryAdd = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.maxLength(255)])
    })
  }

  ngOnInit() {
  }

  submit() {
    if (!this.categoryAdd.valid) {
      console.log('form is invalid')
      return
    }
    this.categoryService.add(this.categoryAdd.value).subscribe(item => console.log(item))
  }
}
