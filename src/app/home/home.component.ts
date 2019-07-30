import {Component, Inject, OnInit} from '@angular/core';
import {DishService} from '../services/dish.service';
import {PromotionService} from '../services/promotion.service';
import {Promotion} from '../Shared/promotion';
import {Dish} from '../Shared/dish';
import {Leader} from '../Shared/leader';
import {LeadersService} from '../services/leaders.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader: Leader;
  dishErrMess: string;
  promotionErrMess: string;
  leaderErrMess: string;


  constructor(private dishService: DishService, private promotionService: PromotionService,
              private leaderService: LeadersService, @Inject ('BaseURL') public BaseURL) {
  }

  ngOnInit() {
    this.dishService.getFeaturedDish()
      .subscribe(dish => this.dish = dish,
        errmess => this.dishErrMess = <any>errmess);
    this.promotionService.getFeaturedPromotion()
      .subscribe(promotion => this.promotion = promotion,
        errmess => this.promotionErrMess = <any>errmess);
    this.leaderService.getFeaturedLeaders()
      .subscribe(leader => this.leader = leader,
        errmess => this.leaderErrMess = <any>errmess);
  }


}
