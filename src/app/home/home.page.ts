import { Component } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  constructor(private orientacao: ScreenOrientation) {
    this.orientacao.lock(this.orientacao.ORIENTATIONS.PORTRAIT);
  }
}
