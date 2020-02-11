import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Accueil',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Moi',
      url: '/moi',
      icon: 'contact'
    },
    {
      title: 'Compétences',
      url: '/competences',
      icon: 'podium'
    },
    {
      title: 'Projets',
      url: '/projets',
      icon: 'code-working'
    },
    {
      title: 'Réalisations',
      url: '/realisations',
      icon: 'code-download'
    },
    {
      title: 'Contact',
      url: '/contact',
      icon: 'contacts'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
