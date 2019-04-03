import {Category} from '../../model/category.model';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';


@Injectable()
export class CategoryService {
    constructor(private http: HttpClient) {}

    getCategories(): Observable<Category[]>{
        return this.http.get<Category[]>(`${environment.api}/category?_sort=rating&_order=asc`)
    }
}