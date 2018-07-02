import { LocalServidor } from './../../models/local_servidor';
import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {LoginPage} from "../login/login";
import { AuthService } from "../../services/auth.service";
import { StorageService } from "../../services/storage.service";


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  public serv : string;

  constructor(public nav: NavController, public auth: AuthService, public storage: StorageService) {
  }

  ionViewDidLoad() {
    let localServidor = this.storage.getLocalServidor();
    this.serv = localServidor.urlAPI;
  }

  salvar() {
    let servidor : LocalServidor = {
      urlAPI:  this.serv
    };
    this.storage.setLocalServidor(servidor);
    this.auth.logout();
    this.nav.setRoot(LoginPage);
  }

  // logout
  logout() {
    this.auth.logout();
    this.nav.setRoot(LoginPage);
  }
}
