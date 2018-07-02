import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocalAtendimentoPage } from './local-atendimento';

@NgModule({
  declarations: [
    LocalAtendimentoPage,
  ],
  imports: [
    IonicPageModule.forChild(LocalAtendimentoPage),
  ],
})
export class LocalAtendimentoPageModule {}
