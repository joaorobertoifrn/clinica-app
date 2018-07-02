import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs/Rx";
import { API_CONFIG } from "../config/api.config";
import { DashboardDTO } from "../models/dashboard.dto";

@Injectable()
export class DashboardService {
  constructor(public http: HttpClient) {}

  findAll(): Observable<DashboardDTO[]> {
    return this.http.get<DashboardDTO[]>(`${API_CONFIG.baseUrl}/dashboard`);
  }
}
