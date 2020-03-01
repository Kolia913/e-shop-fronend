import { Component, OnInit } from '@angular/core';
import {CartService} from '../common/service/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  gameKeys: Array<string> = new Array<string>()
  constructor(private readonly cartService: CartService) { }

  ngOnInit() {
    console.log(this.cartService.values)
  }
  buyAllCart(): void {
    this.cartService.buyCart().subscribe(items => this.gameKeys = items)
    console.log(this.gameKeys)
  }

}
