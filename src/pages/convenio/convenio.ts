import { ConvenioDTO } from './../../models/convenio.dto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConvenioService } from '../../services/convenio.service';

/**
 * Generated class for the ConvenioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-convenio',
  templateUrl: 'convenio.html',
})
export class ConvenioPage {

  // lista de Convenios
  public convenios: ConvenioDTO[];

  public QtdConvenios: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public convenioService: ConvenioService) {
  }

  ionViewDidLoad() {
    this.convenioService.findAll()
      .subscribe(response => {
        this.convenios = response;
        this.QtdConvenios = this.convenios.length;
      },
      error => {});
  }

  // view Convenio Detalhes
  viewDetail(id) {
    //this.nav.push(TripDetailPage, {id: id});
  }

}
