import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './containers/home/home.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HomeCardBtnsComponent } from './components/home-card-btns/home-card-btns.component';

@NgModule({
  declarations: [HomeComponent, HomeCardBtnsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    SharedModule,
    InfiniteScrollModule,
  ],
})
export class HomeModule {}
