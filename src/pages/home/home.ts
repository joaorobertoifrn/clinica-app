import {Component} from "@angular/core";
import {NavController, PopoverController} from "ionic-angular";
import { DashboardDTO } from "../../models/dashboard.dto";
import { DashboardService } from "../../services/dashboard.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  dash: DashboardDTO;

  constructor(
    public nav: NavController,
    public popoverCtrl: PopoverController,
    public dashboardService: DashboardService) {
  }

  ionViewWillEnter() {
    this.dashboardService.findAll()
      .subscribe(response => {
        this.dash = response as DashboardDTO;
      },
      error => {});

  }

}
