import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CartProductModel} from '../model/cart-product.model';

@Injectable()
export class CartService {
   values: Array<CartProductModel> = new Array<CartProductModel>()
   keys: Array<string> = new Array<string>()
   totalPrice: number = 0
  constructor(private readonly http: HttpClient) {
    for (let i = 0, len = localStorage.length; i < len; i++) {
      const key: string = localStorage.key(i)
      const value: string = localStorage[key]
      this.values.push(JSON.parse(value))
      this.totalPrice += this.values[i].price
      console.log(this.totalPrice)
      this.keys.push(key)
    }
  }
  buyCart(): Observable<string[]> {
   /* const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    } */
    localStorage.clear()
    this.values.splice(0, this.values.length)
    this.totalPrice = 0
    return this.http.post<string[]>('http://localhost:3000/cart/buy', this.keys)
  }
  removeFromCart(id: string): void {
    // console.log(id)
    const removeIndex: number = this.values.findIndex(item => item._id === JSON.parse(localStorage.getItem(id))._id)
    if (removeIndex < 0) {
      return
    }
    // console.log(removeIndex)
    this.totalPrice -= this.values[removeIndex].price
    this.values.splice(removeIndex, 1)
    this.keys.splice(removeIndex, 1)
    localStorage.removeItem(id)
  }
}
