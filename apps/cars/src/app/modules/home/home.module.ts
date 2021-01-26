import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './containers/home/home.component';
import { MaterialModule } from '../material/material.module';
import { HomeCarsRenderComponent } from './components/home-cars-render/home-cars-render.component';
import { SharedModule } from '../shared/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [HomeComponent, HomeCarsRenderComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    SharedModule,
    InfiniteScrollModule,
  ],
})
export class HomeModule {}
