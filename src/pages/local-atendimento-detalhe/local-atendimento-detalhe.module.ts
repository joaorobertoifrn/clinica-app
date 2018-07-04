import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocalAtendimentoDetalhePage } from './local-atendimento-detalhe';

@NgModule({
  declarations: [
    LocalAtendimentoDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(LocalAtendimentoDetalhePage),
  ],
})
export class LocalAtendimentoDetalhePageModule {}
