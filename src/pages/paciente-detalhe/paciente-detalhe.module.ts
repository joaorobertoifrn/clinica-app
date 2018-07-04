import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PacienteDetalhePage } from './paciente-detalhe';

@NgModule({
  declarations: [
    PacienteDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(PacienteDetalhePage),
  ],
})
export class PacienteDetalhePageModule {}
