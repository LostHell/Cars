import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertisementComponent } from './containers/advertisement/advertisement.component';

const routes: Routes = [{ path: '', component: AdvertisementComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvertisementRoutingModule {}
