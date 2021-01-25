import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './containers/home/home.component';
import { MaterialModule } from '../material/material.module';
import { HomeCarsRenderComponent } from './components/home-cars-render/home-cars-render.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, HomeCarsRenderComponent],
  imports: [CommonModule, HomeRoutingModule, MaterialModule, SharedModule],
})
export class HomeModule {}
