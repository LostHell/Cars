import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogSearchbarComponent } from '../../dialog/dialog-searchbar.component';
import { LoginComponent } from '../../../../user/containers/login/login.component';
import { RegisterComponent } from '../../../../user/containers/register/register.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openSearchDialog() {
    this.dialog.open(DialogSearchbarComponent, {
      width: '100%',
    });
  }

  openLoginDialog() {
    this.dialog.open(LoginComponent);
  }

  openRegisterDialog() {
    this.dialog.open(RegisterComponent);
  }
}
