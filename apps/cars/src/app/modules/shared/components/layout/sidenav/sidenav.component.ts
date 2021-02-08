import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { LoginComponent } from '../../../../user/containers/login/login.component';
import { RegisterComponent } from '../../../../user/containers/register/register.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  @Input() navigation = [];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  onSidenavClose(event) {
    if (event.target.textContent === 'Login') {
      this.openLoginDialog();
    } else if (event.target.textContent === 'Register') {
      this.openRegisterDialog();
    }

    this.sidenavClose.emit();
  }

  openLoginDialog() {
    this.dialog.open(LoginComponent, {
      maxWidth: '100vw',
    });
  }

  openRegisterDialog() {
    this.dialog.open(RegisterComponent, {
      maxWidth: '100vw',
    });
  }
}
