import { Component, OnInit, Inject } from '@angular/core';
import {DishService} from '../services/dish.service';
import {Dish} from '../Shared/dish';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[];

  constructor(private dishService: DishService,
              @Inject('BaseURL') public BaseURL) { }

  ngOnInit() {
     this.dishService.getDishes()
      .subscribe((dishes) => this.dishes = dishes);
  }
}
