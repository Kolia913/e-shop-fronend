import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../common/service/category.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit {
  private categoryEdit: FormGroup;
  private categoryId: string
  constructor(private readonly formBuilder: FormBuilder,
              private readonly categoryService: CategoryService,
              private readonly route: ActivatedRoute) {
    this.categoryEdit = this.formBuilder.group({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.maxLength(255)])
  })
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id: string = params.get('id')
      this.categoryService.get(id).subscribe( item => {
          this.categoryId = item._id
          this.categoryEdit.patchValue({
          name: item.name,
          description: item.description
        })
      })
    })
  }

  submit() {
    if (!this.categoryEdit.valid) {
      console.log(`form is invalid`)
      return
    }
    this.categoryService.update(this.categoryId, this.categoryEdit.value).subscribe((response) => console.log(response),
      err => {
        if (err) {
          console.log('some action', err.getErrors().length);
          return;
        }
      })
  }
}
