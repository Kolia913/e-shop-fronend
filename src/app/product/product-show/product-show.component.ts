import { Component, OnInit } from '@angular/core';
import {ProductService} from '../common/service/product.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {ProductModel} from '../common/model/product.model';

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.scss']
})
export class ProductShowComponent implements OnInit {

  product?: Observable<ProductModel>
  platforms: string[] = ['Windows', 'MacOS', 'Linux']
  productPlatforms: string[] = []
  constructor(private readonly productService: ProductService,
              private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id: string = params.get('id')
      console.log(`id: ${id}`)
      this.product = this.productService.get(id)
    })
    this.product.subscribe(item => {
      item.platform.forEach( item1 => {
        this.productPlatforms.push(' ' + this.platforms[item1])
      })
    })
  }

}
