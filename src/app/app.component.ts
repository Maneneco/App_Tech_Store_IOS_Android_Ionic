import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menu: MenuController) {}
  menuteste() {
    this.menu.enable(true, 'main-menu');
    this.menu.open('main-menu');
  }
  closemenu() {
    this.menu.close();
  }
  menuprofile() {
    this.menu.enable(true, 'menu-profile');
    this.menu.open('menu-profile');
  }
}
