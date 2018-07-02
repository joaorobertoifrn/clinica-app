import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HTTP_INTERCEPTORS
} from "@angular/common/http";
import { Observable } from "rxjs/Rx"; // IMPORTANTE: IMPORT ATUALIZADO
import { StorageService } from "../services/storage.service";
import { API_CONFIG } from "../config/api.config";
import { LocalServidor } from "../models/local_servidor";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(public storage: StorageService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let localUser = this.storage.getLocalUser();
    let localServidor = this.storage.getLocalServidor();

    if (localServidor) {
      let serv: LocalServidor = {
        urlAPI: API_CONFIG.baseUrl
      };
      this.storage.setLocalServidor(serv);
    } else {
      API_CONFIG.baseUrl = localServidor.urlAPI;
    }

    let N = API_CONFIG.baseUrl.length;
    let requestToAPI = req.url.substring(0, N) == API_CONFIG.baseUrl;

    if (localUser && requestToAPI) {
      const authReq = req.clone({
        headers: req.headers.set("Authorization", "Bearer " + localUser.token)
      });
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}

export const AuthInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
};
