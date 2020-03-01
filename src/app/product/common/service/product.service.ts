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
  add(data: FormData): Observable<ProductModel> {
    return this.http.post<ProductModel>('http://localhost:300/products/add', data).pipe(
      tap(product => this.products.push(product), console.log)
    )
  }
  update(id: string, data: FormData): Observable<ProductModel> {
    data.append('_method', 'put')
    return this.http.put<ProductModel>(`http://localhost:3000/products/edit/${id}`, data).pipe(
      tap(product => {
        const updatedIndex = this.products.findIndex(item => item._id === product._id)
        if (updatedIndex < 0) {
          return product
        }
        this.products[updatedIndex] = product
        return product
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
