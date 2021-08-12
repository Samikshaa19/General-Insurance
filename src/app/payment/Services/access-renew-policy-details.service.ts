import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { RenewPolicyDetails } from '../Models/renew-policy-details';

@Injectable({
  providedIn: 'root'
})
export class AccessRenewPolicyDetailsService {

  // --------------- declare the link -----------------------------------
  private plan_page_url = "http://localhost:25456/api"

  constructor(private httpClient: HttpClient) { }

  // ---------------- JSON Indicator ------------------------------------
  httpOptions = {
    headers: new HttpHeaders({
      // This tells that the content received is in JSON
      'Content-Type': 'application/json'
    })
  }

  // ----------------display details-------------------------------------
  getRenewPolicyDetails(): Observable<RenewPolicyDetails[]> {
    return this.httpClient.get<RenewPolicyDetails[]>(this.plan_page_url + '/RenewPolicyDetails/')
  }

  // ----------------add details-----------------------------------------
  addRenewPolicyDetails(renew_policy_detail_obj: RenewPolicyDetails): Observable<RenewPolicyDetails[]> {
    return this.httpClient.post<RenewPolicyDetails[]>(this.plan_page_url + "/RenewPolicyDetails/", JSON.stringify(renew_policy_detail_obj), this.httpOptions)
  }
}
