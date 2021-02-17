import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertisementRoutingModule } from './advertisement-routing.module';

import { AdvertisementComponent } from './containers/advertisement/advertisement.component';
import { SharedModule } from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [AdvertisementComponent],
  imports: [
    CommonModule,
    AdvertisementRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
  ],
})
export class AdvertisementModule {}
