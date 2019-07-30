import { Injectable } from '@angular/core';


import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {Observable} from 'rxjs';
import {Promotion} from '../Shared/promotion';
import { RestangularModule, Restangular } from 'ngx-restangular';


@Injectable()
export class PromotionService {

  constructor(private restangular: Restangular) { }

  getPromotions(): Observable<Promotion[]> {
    return this.restangular.all('promotions').getList();
  }

  getPromotion(id: number): Observable<Promotion> {
    return  this.restangular.one('promotions',id).get();
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return this.restangular.all('promotions').getList({featured: true})
      .map(promotions => promotions[0]);
  }
}
