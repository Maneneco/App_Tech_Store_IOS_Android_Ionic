import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menu: MenuController, private router: Router) {}

  menuteste() {
    this.menu.enable(true, 'main-menu');
    this.menu.open('main-menu');
  }
  closemenu() {
    this.menu.close();
  }
  menuchoose() {
    this.menu.enable(true, 'menu-choose');
    this.menu.open('menu-choose');
  }
  menulogin() {
    this.menu.enable(true, 'menu-login');
    this.menu.open('menu-login');
  }
  menuprofile() {
    this.menu.enable(true, 'menu-profile');
    this.menu.open('menu-profile');
  }

  menumobile() {
    this.router.navigate(['/mobile']);
  }
}
