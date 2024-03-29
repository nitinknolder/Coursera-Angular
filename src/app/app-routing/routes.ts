import {Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {AboutComponent} from '../about/about.component';
import {MenuComponent} from '../menu/menu.component';
import {ContactComponent} from '../contact/contact.component';
import {DishdetailComponent} from '../dishdetails/dishdetails.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'dishdetails/:id', component: DishdetailComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];
