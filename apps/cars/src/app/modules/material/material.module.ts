import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

const MaterialModules = [MatButtonModule, MatCardModule, MatIconModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...MaterialModules],
  exports: MaterialModules,
})
export class MaterialModule {}
