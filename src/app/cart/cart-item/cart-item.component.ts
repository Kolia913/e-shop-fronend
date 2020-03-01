import {Component, Input, OnInit} from '@angular/core';
import {CartProductModel} from '../common/model/cart-product.model';
import {CartService} from '../common/service/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
   @Input() cartProduct: CartProductModel
  constructor(private readonly cartService: CartService) { }

  ngOnInit() {
  }

}
