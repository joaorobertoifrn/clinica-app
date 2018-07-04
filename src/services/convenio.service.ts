import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs/Rx";
import { API_CONFIG } from "../config/api.config";
import { ConvenioDTO } from "../models/convenio.dto";
import { StorageService } from "./storage.service";

@Injectable()
export class ConvenioService {
  constructor(public http: HttpClient, public storage: StorageService) {}

  findAll(): Observable<ConvenioDTO[]> {
    return this.http.get<ConvenioDTO[]>(`${API_CONFIG.baseUrl}/convenio`);
  }

  findById(id: string) {
    return this.http.get<ConvenioDTO>(`${API_CONFIG.baseUrl}/convenio/${id}`);
  }

  insert(obj: ConvenioDTO) {
    return this.http.post(`${API_CONFIG.baseUrl}/convenio`, obj, {
      observe: "response",
      responseType: "text"
    });
  }
}
