import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { MaterialModule } from '../material/material.module';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ButtonComponent, DialogComponent],
  exports: [HeaderComponent, FooterComponent, ButtonComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
})
export class SharedModule {}
