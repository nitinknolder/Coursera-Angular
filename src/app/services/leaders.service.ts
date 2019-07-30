import { Injectable } from '@angular/core';

import { RestangularModule, Restangular } from 'ngx-restangular';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {Leader} from '../Shared/leader';
import {Observable} from 'rxjs';

@Injectable()
export class LeaderService {

  constructor(private restangular: Restangular) { }

  getLeaders(): Observable<Leader[]> {
    return this.restangular.all('leaders').getList();
  }

  getLeader(id: number): Observable<Leader> {
    return  this.restangular.one('leaders',id).get();
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.restangular.all('leaders').getList({featured: true})
      .map(leaders => leaders[0]);
  }
}
