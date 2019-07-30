import {Injectable} from '@angular/core';
import {Dish} from '../Shared/dish';

import {Observable, of, pipe} from 'rxjs';
import {delay, map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {baseURL} from './baseurl';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private httpClient: HttpClient) {
  }

  getDishes(): Observable<Dish[]> {
    return this.httpClient.get<Dish[]>(baseURL + 'dishes');
    }

  getDish(id: string): Observable<Dish> {
    return this.httpClient.get<Dish>(baseURL + 'dishes/' + id);
  }

  getFeaturedDish(): Observable<Dish> {
    return this.httpClient.get<Dish[]>(baseURL + 'dishes?featured=true')
      .pipe(map(dishes => dishes[0]));
  }

  getDishIds(): Observable<string[] | any> {
    return this.getDishes().pipe(map(dishes => dishes.map(dish => dish.id)));
  }
}
