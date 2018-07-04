import { ConvenioDTO } from './../../models/convenio.dto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ConvenioService } from '../../services/convenio.service';

@IonicPage()
@Component({
  selector: 'page-convenio',
  templateUrl: 'convenio.html',
})
export class ConvenioPage {

  // lista de Convenios
  public convenios: ConvenioDTO[] = [];
  public QtdConvenios: number;
  page : number = 0;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public convenioService: ConvenioService) {
  }

  ionViewDidLoad() {
    this.loadData();

  }

  loadData() {
    let loader = this.presentLoading();
    this.convenioService.findAll()
      .subscribe(response => {
        this.convenios = response;
        this.QtdConvenios = this.convenios.length;
        loader.dismiss();
      },
      error => {});
  }

  carregaTela(id){
    if(id) {
      this.viewDetail(id);
    } else {
      this.viewDetail(null);
    }
  }
  // view Convenio Detalhes
  viewDetail(id) {
    this.navCtrl.push('ConvenioDetalhePage', {id: id});
  }
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Aguarde..."
    });
    loader.present();
    return loader;
  }

  doRefresh(refresher) {
    this.page = 0;
    this.convenios = [];
    this.loadData();
    setTimeout(() => {
      refresher.complete();
    }, 1000);
  }

  doInfinite(infiniteScroll) {
    this.page++;
    this.loadData();
    setTimeout(() => {
      infiniteScroll.complete();
    }, 1000);
  }

}
