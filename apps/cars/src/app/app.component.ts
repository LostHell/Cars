import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  onActivate(event) {
    window.scroll(0, 0);
  }

  navigation = [];

  ngOnInit(): void {
    this.navigation = [
      { name: 'Home', route: '/' },
      { name: 'Login', dialog: 'LoginDialog' },
      { name: 'Register', dialog: 'RegisterDialog' },
      { name: 'Make Offer', route: '/advertisement' },
      { name: 'Account', route: '/user/account' },
    ];
  }
}
