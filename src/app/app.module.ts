import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule, MatFormFieldModule,
  MatGridListModule,
  MatListModule, MatProgressSpinnerModule, MatSelectModule, MatSliderModule,
  MatToolbarModule, MatSlideToggleModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

import 'hammerjs';
import {MenuComponent} from './menu/menu.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';

import {DishService} from './services/dish.service';

import {AppRoutingModule} from './app-routing/app-routing.module';
import {PromotionService} from './services/promotion.service';
import {DishdetailComponent} from './dishdetails/dishdetails.component';
import {LeadersService} from './services/leaders.service';
import {LoginComponent} from './login/login.component';
import {MatInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {baseURL} from './services/baseurl';
import {HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    FlexLayoutModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    RestangularModule.forRoot(RestangularConfigFactory)

  ],
  exports: [
    MatFormFieldModule,
    MatInputModule
  ],
  entryComponents: [LoginComponent],
  providers: [DishService,
    PromotionService,
    LeadersService,
    { provide: 'BaseURL', useValue: baseURL }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
