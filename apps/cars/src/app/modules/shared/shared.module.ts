import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { MaterialModule } from '../material/material.module';
import { DialogSearchbarComponent } from './components/dialog/dialog-searchbar.component';
import { ReactiveInputComponent } from './components/form/reactive-input/reactive-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SidenavComponent } from './components/layout/sidenav/sidenav.component';
import { TextAreaInputComponent } from './components/form/text-area-input/text-area-input.component';
import { FileUploaderComponent } from './components/form/file-uploader/file-uploader.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    DialogSearchbarComponent,
    ReactiveInputComponent,
    SidenavComponent,
    TextAreaInputComponent,
    FileUploaderComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    ReactiveInputComponent,
    SidenavComponent,
    TextAreaInputComponent,
    FileUploaderComponent,
  ],
  imports: [CommonModule, RouterModule, MaterialModule, ReactiveFormsModule],
})
export class SharedModule {}
