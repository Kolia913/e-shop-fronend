import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductModel} from '../model/product.model';
import {Observable} from 'rxjs';
import {CartProductModel} from '../model/cart-product.model';
import {catchError, tap} from 'rxjs/operators';

@Injectable()
export class ProductService {
  products: ProductModel[] = []
  constructor(private readonly  http: HttpClient) {
    this.http.get<ProductModel[]>('http://localhost:3000/products')
      .subscribe( (products) => {this.products = products, console.log(this.products)})
  }

  get(id: string): Observable<ProductModel> {
    return this.http.get<ProductModel>(`http://localhost:3000/products/${id}`)
  }
  getByCategory(categoryId: string): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`http://localhost:3000/products/category/${categoryId}`)
  }
  add(product: ProductModel): Observable<ProductModel> {
    return this.http.post<ProductModel>('http://localhost:3000/products/add', product).pipe(
      tap(item => this.products.push(item), console.log)
    )
  }
  update(id: string, product: ProductModel): Observable<ProductModel> {
    return this.http.put<ProductModel>(`http://localhost:3000/products/edit/${id}`, product).pipe(
      tap(itemProduct => {
        const updatedIndex = this.products.findIndex(item => item._id === itemProduct._id)
        console.log(updatedIndex)
        if (updatedIndex < 0) {
          return itemProduct
        }
        this.products[updatedIndex] = product
        return itemProduct
      }),
      catchError( (item) => {
        throw new item.Error()
      })
    )
  }
  remove(id: string): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/products/delete/${id}`).pipe(
      tap( () => {
        const deletedIndex = this.products.findIndex( (item) => item._id === id)
        if (deletedIndex < 0) {
           return
        }
        this.products.splice(deletedIndex, 1)
      })
    )
  }
  addToCart(cartProduct: ProductModel): void {
    localStorage.setItem(cartProduct._id, JSON.stringify(this.mapCartProduct(cartProduct)))
    const item: string = localStorage.getItem(cartProduct._id)
    if (item) {
      alert('Successfully added to cart!')
    }
  }
  mapCartProduct(product: ProductModel): CartProductModel {
    return {
      _id: product._id,
      name: product.name,
      image: product.image,
      price: product.price
    }
  }
}
