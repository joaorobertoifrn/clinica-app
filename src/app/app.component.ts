import { Component, ViewChild } from "@angular/core";
import { Platform, Nav } from "ionic-angular";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { Keyboard } from "@ionic-native/keyboard";

import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { AuthService } from "../services/auth.service";
import { ConvenioPage } from "../pages/convenio/convenio";
import { PacientePage } from "../pages/paciente/paciente";
import { ProfissionalPage } from "../pages/profissional/profissional";
import { LocalAtendimentoPage } from "../pages/local-atendimento/local-atendimento";
import { UsuarioPage } from "../pages/usuario/usuario";
import { StorageService } from "../services/storage.service";

export interface MenuItem {
  title: string;
  component: any;
  icon: string;
}

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  emailUser: string;

  appMenuItems: Array<MenuItem>;

  ionViewWillEnter() {
    let localUser = this.storage.getLocalUser();
    if (localUser) {
      this.emailUser = localUser.email;
    } else {
      this.emailUser = '';
    }
}

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public keyboard: Keyboard,
    public storage: StorageService,
    public auth: AuthService
  ) {
    this.initializeApp();
    this.ionViewWillEnter();

    this.appMenuItems = [
      { title: "Home", component: HomePage, icon: "home" },
      { title: "Convênio", component: ConvenioPage, icon: "md-cube" },
      { title: "Paciente", component: PacientePage, icon: "md-cube" },
      { title: "Profissional", component: ProfissionalPage, icon: "md-cube" },
      {
        title: "Local Atendimento",
        component: LocalAtendimentoPage,
        icon: "md-cube"
      },
      { title: "Usuário", component: UsuarioPage, icon: "md-people" }
    ];
  }


  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.

      //*** Control Splash Screen
      this.splashScreen.show();
      this.splashScreen.hide();

      //*** Control Status Bar
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);

      //*** Control Keyboard
      this.keyboard.disableScroll(true);
    });
  }

  openPage(page: { title: string; component: string }) {
    switch (page.title) {
      case "Logout":
        this.auth.logout();
        this.nav.setRoot(LoginPage);
        break;

      default:

        this.nav.setRoot(page.component);
    }
  }

  logout() {
    this.auth.logout();
    this.nav.setRoot(LoginPage);
  }
}
