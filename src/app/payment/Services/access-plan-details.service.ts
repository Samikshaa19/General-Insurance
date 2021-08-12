import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { InsuranceDetails } from '../Models/insurance-details';

@Injectable({
  providedIn: 'root'
})
export class AccessPlanDetailsService {

  min = 10000000000000000000;
  max = 99999999999999999999;

  // --------------- declare the link -----------------------------------
  private plan_page_url = "http://localhost:25456/api"

  constructor(private httpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      // This tells that the content received is in JSON
      'Content-Type': 'application/json'
    })
  }

  // ----------------display details-------------------------------------
  getPlanDetails(): Observable<InsuranceDetails[]> {
    return this.httpClient.get<InsuranceDetails[]>(this.plan_page_url + '/insuranceDetails/')
  }

  // ----------------add details-----------------------------------------
  addPlanDetails(plan_page_obj: InsuranceDetails): Observable<InsuranceDetails[]> {
    return this.httpClient.post<InsuranceDetails[]>(this.plan_page_url + "/insuranceDetails/", JSON.stringify(plan_page_obj), this.httpOptions)
  }

  //----------------- new Policy Number---------------------------------------------
  generateNewPolicyNo() {
    this.min = Math.ceil(this.min);
    this.max = Math.floor(this.max);
    console.log(Math.floor(Math.random() * (this.max - this.min + 1)) + this.min)
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  }
}

