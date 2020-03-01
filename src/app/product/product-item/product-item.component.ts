import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from '../common/model/product.model';
import {ProductService} from '../common/service/product.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: ProductModel
  platforms: string[] = ['Windows', 'MacOS', 'Linux']
  productPlatforms: string[] = []
  isAdmin = environment.isAdmin;
  constructor(private readonly productService: ProductService) {
  }

  ngOnInit() {
    this.product.platform.forEach( item => {
      this.productPlatforms.push(' ' + this.platforms[item])
    })
    // console.log(this.productPlatforms)
  }

}
