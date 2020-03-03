import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CategoryModel} from '../model/category.model';
import {Observable} from 'rxjs';
import {ProductModel} from '../../../product/common/model/product.model';
import {catchError, tap} from 'rxjs/operators';

@Injectable()
export class CategoryService {
  categories: CategoryModel[] = []
  constructor(private readonly http: HttpClient) {
    this.http.get<CategoryModel[]>('http://localhost:3000/categories').subscribe( (items) => {
      this.categories = items, console.log(items)
    })
  }
  get(id: string): Observable<CategoryModel> {
    return this.http.get<CategoryModel>(`http://localhost:3000/categories/${id}`)
  }
  add(category: CategoryModel): Observable<CategoryModel> {
    return this.http.post<CategoryModel>('http://localhost:3000/categories/add', category).pipe(
      tap(item => this.categories.push(item), console.log)
    )
  }
  update(id: string, category: CategoryModel): Observable<CategoryModel> {
    return this.http.put<CategoryModel>(`http://localhost:3000/categories/edit/${id}`, category).pipe(
      tap(itemCategory => {
        const updatedIndex = this.categories.findIndex(item => item._id === itemCategory._id)
        if (updatedIndex < 0) {
          return itemCategory
        }
        this.categories[updatedIndex] = category
        return itemCategory
      }),
      catchError( (item) => {
        throw new item.Error()
      })
    )
  }
  remove(id: string): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/categories/delete/${id}`).pipe(
      tap( () => {
        const deletedIndex = this.categories.findIndex( (item) => item._id === id)
        if (deletedIndex < 0) {
          return
        }
        this.categories.splice(deletedIndex, 1)
      })
    )
  }
}
