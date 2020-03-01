import { Component, OnInit } from '@angular/core';
import {ProductService} from '../common/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private readonly productService: ProductService) { }

  ngOnInit() {
  }

}
