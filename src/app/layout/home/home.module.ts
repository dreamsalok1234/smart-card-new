import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {
	BannerComponent,
	StepComponent,
    SliderComponent,
    VoucherComponent
} from './components';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent,
		BannerComponent,
		StepComponent,
        SliderComponent,
        VoucherComponent
    ]
})
export class HomeModule {}
