import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MorecharitiesComponent } from './morecharities/morecharities.component';
import { IndividualComponent } from './individual/individual.component';
import { CharitiesComponent } from './charities/charities.component';
import { CharityTabComponent } from './charities/charitytab/charitytab.component';
import { AnimalTabComponent } from './charities/animaltab/animaltab.component';
import { CheckoutTabComponent } from './charities/checkouttab/checkouttab.component';
import { CheckoutaccordionComponent } from './charities/checkouttab/checkoutaccordion/checkoutaccordion.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

import { AccordionComponent } from './home/accordion/accordion.component';
import { SliderComponent } from './home/slider/slider.component';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SwiperModule } from "swiper/angular";
import { TabModule } from 'angular-tabs-component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'morecharities', component: MorecharitiesComponent },
  { path: 'individual', component: IndividualComponent },
  { path: 'charities', component: CharitiesComponent },
  { path: 'thankyou', component: ThankyouComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MorecharitiesComponent,
    IndividualComponent,
    CharitiesComponent,
    CharityTabComponent,
    AnimalTabComponent,
    CheckoutTabComponent,
    ThankyouComponent,
    AccordionComponent,
    SliderComponent,
    CheckoutaccordionComponent
  ],
  imports: [
    BrowserModule,
    AccordionModule,
    BrowserAnimationsModule,
    NgbModule,
    SwiperModule,
    TabModule,
    RouterModule.forRoot(routes,{
      scrollPositionRestoration: 'enabled'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
