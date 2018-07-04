import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConvenioDetalhePage } from './convenio-detalhe';

@NgModule({
  declarations: [
    ConvenioDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(ConvenioDetalhePage),
  ],
})
export class ConvenioDetalhePageModule {}
