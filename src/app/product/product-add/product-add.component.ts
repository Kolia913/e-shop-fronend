import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FormDataService} from '../../common/service/form-data.service';
import {Router} from '@angular/router';
import {CategoryService} from '../../category/common/service/category.service';
import {ProductService} from '../common/service/product.service';
import {ProductModel} from '../common/model/product.model';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  productAdd: FormGroup
  product: ProductModel
  imageUrl: string
  constructor(private readonly formBuilder: FormBuilder,
              private readonly formDataService: FormDataService,
              private readonly route: Router,
              private readonly categoryService: CategoryService,
              private readonly  productService: ProductService,
             ) {
    this.productAdd = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      image: new FormControl('', [Validators.required]),
      price: new FormControl(0, [Validators.required]),
      key: new FormControl('', [Validators.required, Validators.maxLength(19), Validators.minLength(12)]),
      categoryId: new FormControl('', [Validators.required])
    })
  }

  ngOnInit() {
    this.productAdd.get('image').valueChanges.subscribe(value => {this.imageUrl = value.toString()})
  }

  submit() {
    if (!this.productAdd.valid) {
      console.log('form is invalid')
      return
    }
    /*const data = this.formDataService.formGroupToFormData(this.productAdd)
    console.log(data.get('name'))*/
    console.log(this.productAdd.value)
    const product = this.productService.add(this.productAdd.value).subscribe(item => console.log(item))
    this.productAdd.reset()
    this.imageUrl = ''
  }
}
