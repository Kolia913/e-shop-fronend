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
  isAdmin = environment.isAdmin;
  constructor(private readonly productService: ProductService) {
  }

  ngOnInit() {
  }

  removeProduct(id: string) {
    this.productService.remove(id).subscribe(item => console.log('deleted'))
  }
}
