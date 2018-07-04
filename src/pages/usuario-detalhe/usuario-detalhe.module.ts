import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsuarioDetalhePage } from './usuario-detalhe';

@NgModule({
  declarations: [
    UsuarioDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(UsuarioDetalhePage),
  ],
})
export class UsuarioDetalhePageModule {}
