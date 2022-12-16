import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeModule } from './pages/home/home.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CarouselComponent } from './pages/carousel/carousel.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { PaymentComponentsComponent } from './payment-components/payment-components.component';

@NgModule({
  declarations: [
    AppComponent,
   
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
