import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsRoutingModule } from './details-routing.module';

import { DetailsComponent } from './containers/details/details.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [DetailsComponent, CarouselComponent],
  imports: [CommonModule, DetailsRoutingModule, SharedModule],
})
export class DetailsModule {}
