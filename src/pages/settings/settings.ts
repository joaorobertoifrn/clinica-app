import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {LoginPage} from "../login/login";
import { AuthService } from "../../services/auth.service";


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public nav: NavController, public auth: AuthService) {
  }

  // logout
  logout() {
    this.auth.logout();
    this.nav.setRoot(LoginPage);
  }
}
