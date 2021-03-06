import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { API_CONFIG } from "../config/api.config";

@Injectable()
export class DashboardService {
  constructor(public http: HttpClient) {}

  findAll() {
    return this.http.get(`${API_CONFIG.baseUrl}/dashboard`);
  }
}
