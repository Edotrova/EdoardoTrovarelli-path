import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';
import { CarouselComponent } from '../carousel/carousel.component';



@NgModule({
    declarations: [
        OverviewComponent,
        
        
       
    ],
    imports: [
        CommonModule,
        OverviewRoutingModule,
        CarouselComponent
       
       
        
        
    ]
})
export class OverviewModule { }
