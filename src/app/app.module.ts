import {NgModule} from "@angular/core";
import {IonicApp, IonicModule} from "ionic-angular";
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from '@ionic-native/keyboard';
import {MyApp} from "./app.component";
import {SettingsPage} from "../pages/settings/settings";
import {HomePage} from "../pages/home/home";
import {LoginPage} from "../pages/login/login";
import {RegisterPage} from "../pages/register/register";
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { AuthInterceptorProvider } from '../interceptors/auth.interceptors';
import { ErrorInterceptorProvider } from '../interceptors/error.interceptors';
import { ConvenioPage } from "../pages/convenio/convenio";
import { ConvenioService } from "../services/convenio.service";
import { PacientePage } from "../pages/paciente/paciente";
import { ProfissionalPage } from "../pages/profissional/profissional";
import { LocalAtendimentoPage } from "../pages/local-atendimento/local-atendimento";
import { UsuarioPage } from "../pages/usuario/usuario";
import { DashboardService } from "../services/dashboard.service";
import { LocalAtendimentoDetalhePage } from "../pages/local-atendimento-detalhe/local-atendimento-detalhe";
import { PacienteDetalhePage } from "../pages/paciente-detalhe/paciente-detalhe";
import { ProfissionalDetalhePage } from "../pages/profissional-detalhe/profissional-detalhe";
import { UsuarioDetalhePage } from "../pages/usuario-detalhe/usuario-detalhe";

// import services
// end import services
// end import services

// import pages
// end import pages

@NgModule({
  declarations: [
    MyApp,
    SettingsPage,

    HomePage,
    LoginPage,

    RegisterPage,
    ConvenioPage,
    PacientePage,
    ProfissionalPage,
    LocalAtendimentoPage,
    UsuarioPage,

    LocalAtendimentoDetalhePage,
    PacienteDetalhePage,
    ProfissionalDetalhePage,
    UsuarioDetalhePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    }),
    IonicStorageModule.forRoot({
      name: '__ionic3_start_theme',
        driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SettingsPage,

    HomePage,
    LoginPage,

    RegisterPage,
    ConvenioPage,
    PacientePage,
    ProfissionalPage,
    LocalAtendimentoPage,
    UsuarioPage,

    LocalAtendimentoDetalhePage,
    PacienteDetalhePage,
    ProfissionalDetalhePage,
    UsuarioDetalhePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    AuthService,
    StorageService,
    AuthInterceptorProvider,
    ErrorInterceptorProvider,
    ConvenioService,
    DashboardService
  ]
})

export class AppModule {
}
