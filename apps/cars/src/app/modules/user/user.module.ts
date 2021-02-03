import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';

import { LoginComponent } from './containers/login/login.component';
import { RegisterComponent } from './containers/register/register.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountComponent } from './containers/account/account.component';
import { OffersComponent } from './components/offers/offers.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, AccountComponent, OffersComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class UserModule {}
