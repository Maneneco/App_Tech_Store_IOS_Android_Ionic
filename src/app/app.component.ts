import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  logged = false;
  showsearchbar = false;
  @ViewChild('topbar') pRef: ElementRef;
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
  menucreate() {
    this.menu.enable(true, 'menu-create');
    this.menu.open('menu-create');
  }
  menuloginemail() {
    this.menu.enable(true, 'menu-login-email');
    this.menu.open('menu-login-email');
  }
  menucart() {
    this.menu.enable(true, 'menu-cart');
    this.menu.open('menu-cart');
  }
  login() {
    this.logged = true;
    localStorage.setItem('logged', String(this.logged));
  }
  logout() {
    this.logged = false;
    localStorage.setItem('logged', String(this.logged));
  }

  togglesearchbar() {
    if (this.showsearchbar == false) {
      this.showsearchbar = true;
      document.getElementById('topbar').style.height = '110px';
    } else {
      this.showsearchbar = false;
      document.getElementById('topbar').style.height = '64px';
    }
  }
}
