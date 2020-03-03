import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FormDataService} from '../../common/service/form-data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../../category/common/service/category.service';
import {ProductService} from '../common/service/product.service';
import {ProductModel} from '../common/model/product.model';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  productEdit: FormGroup
  productId: string
  imageUrl: string

  constructor(private readonly formBuilder: FormBuilder,
              private readonly formDataService: FormDataService,
              private readonly route: ActivatedRoute,
              private readonly categoryService: CategoryService,
              private readonly  productService: ProductService) {
    this.productEdit = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      image: new FormControl('', [Validators.required]),
      price: new FormControl(0, [Validators.required]),
      key: new FormControl('', [Validators.required, Validators.maxLength(19), Validators.minLength(12)]),
      categoryId: new FormControl('', [Validators.required])
    })
  }

  ngOnInit() {
    this.productEdit.get('image').valueChanges.subscribe(value => {
      this.imageUrl = value.toString()
    })
    this.route.paramMap.subscribe((params) => {
      const id: string = params.get('id');
      this.productService.get(id).subscribe(item => {
        this.productId = item._id
        this.productEdit.patchValue({
          name: item.name,
          description: item.description,
          image: item.image,
          price: item.price,
          key: item.key,
          categoryId: item.categoryId
        })
      })
    })
  }

  submit() {
    if (!this.productEdit.valid) {
      console.log(`form is invalid`)
      return
    }
    this.productService.update(this.productId, this.productEdit.value).subscribe((response) => console.log(response),
      err => {
        if (err) {
          console.log('some action', err.getErrors().length);
          return;
        }
      })
  }
}
