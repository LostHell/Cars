import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogSearchbarComponent } from '../../dialog/dialog-searchbar.component';
import { LoginComponent } from '../../../../user/containers/login/login.component';
import { RegisterComponent } from '../../../../user/containers/register/register.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() public sidenavToggle = new EventEmitter();
  @Output() public sidenavClose = new EventEmitter();

  @Input() navigation = [];

  hidden = false;

  constructor(private dialog: MatDialog) {}

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  openSearchDialog() {
    this.dialog.open(DialogSearchbarComponent, {
      width: '100%',
    });
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  onCloseSidenav() {
    this.sidenavClose.emit();
  }
}
