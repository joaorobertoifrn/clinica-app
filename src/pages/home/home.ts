import {Component} from "@angular/core";
import {NavController, PopoverController} from "ionic-angular";
import { DashboardDTO } from "../../models/dashboard.dto";
import { DashboardService } from "../../services/dashboard.service";
import { SettingsPage } from "../settings/settings";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  dash: DashboardDTO;
  page : number = 0;

  constructor(
    public nav: NavController,
    public popoverCtrl: PopoverController,

    public dashboardService: DashboardService) {
  }

  // Pagina de Configurações
  doConfiguracoes() {
    this.nav.push(SettingsPage);
  }

  ionViewWillEnter() {
    this.dashboardService.findAll()
      .subscribe(response => {
        this.dash = response as DashboardDTO;
      },
      error => {});
  }


}
