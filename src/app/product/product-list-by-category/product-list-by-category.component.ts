import { Component, OnInit } from '@angular/core';
import {ProductService} from '../common/service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductModel} from '../common/model/product.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-list-by-category',
  templateUrl: './product-list-by-category.component.html',
  styleUrls: ['./product-list-by-category.component.scss']
})
export class ProductListByCategoryComponent implements OnInit {
  id: string
  products?: Observable<ProductModel[]>
  constructor(private readonly productService: ProductService, private readonly route: ActivatedRoute, private readonly router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')
      this.products = this.productService.getByCategory(this.id)
      this.products.subscribe(items => {
        if (items.length <= 0) {
          this.router.navigate(['/'])
          return
        }
      })
      console.log(this.id)
    })
  }
}
