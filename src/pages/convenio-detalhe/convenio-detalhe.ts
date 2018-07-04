import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConvenioService } from '../../services/convenio.service';
import { ConvenioDTO } from '../../models/convenio.dto';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@IonicPage()
@Component({
  selector: 'page-convenio-detalhe',
  templateUrl: 'convenio-detalhe.html',
})
export class ConvenioDetalhePage {

  formGroup: FormGroup;
  convenio: ConvenioDTO;

  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public navParams: NavParams,
    public convenioService: ConvenioService,
    public alertCtrl: AlertController) {

      this.formGroup = this.formBuilder.group({
        id: ['', []],
        nome: ['Nome Convênio', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
        email: ['email@convenio.com.br', [Validators.required, Validators.email]],
        registroANS : ['154613213', [Validators.required]],
        cnpj : ['06134596280', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
        razaoSocial : ['Razão Social do Convênio', [Validators.required]],
        codigoCNS : ['123456', [Validators.required]],
        periodoRetorno : ['15', []],
        telefone : ['977261827', [Validators.required]],
      });

  }

  ionViewDidLoad() {
    let categoria_id = this.navParams.get('id');
    if (categoria_id) {
      this.convenioService.findById(categoria_id)
      .subscribe(response => {
        this.convenio = response;
        if (this.convenio) {
          this.formGroup.controls.id.setValue(this.convenio.id);
          this.formGroup.controls.nome.setValue(this.convenio.nome);
          this.formGroup.controls.email.setValue(this.convenio.email);
          this.formGroup.controls.registroANS.setValue(this.convenio.registroANS);
          this.formGroup.controls.cnpj.setValue(this.convenio.cnpj);
          this.formGroup.controls.razaoSocial.setValue(this.convenio.razaoSocial);
          this.formGroup.controls.codigoCNS.setValue(this.convenio.codigoCNS);
          this.formGroup.controls.periodoRetorno.setValue(this.convenio.periodoRetorno);
          this.formGroup.controls.telefone.setValue(this.convenio.telefone);
        }
      },
      error => {});
    }

  }
  cadastrarCategoria() {
    this.convenioService.insert(this.formGroup.value)
      .subscribe(response => {
        this.showInsertOk();
      },
      error => {this.showInsertError()});
  }

  showInsertOk() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      message: 'Cadastro efetuado com sucesso',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  }

  showInsertError() {
    let alert = this.alertCtrl.create({
      title: 'Falha!',
      message: 'Cadastro não efetuado.',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  }

}
