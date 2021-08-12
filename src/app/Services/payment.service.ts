import { Injectable } from '@angular/core';

//-----------------------------------------------------------------------------
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { PaymentDetails } from '../Models/payment-details';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  // --------------- declare the link -------------------------
  private payment_url = "http://localhost:25456/api"

  constructor(private httpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      // This tells that the content received is in JSON
      'Content-Type': 'application/json'
    })
  }

  getPaymentDetails(): Observable<PaymentDetails[]> {
    return this.httpClient.get<PaymentDetails[]>(this.payment_url + "/PaymentDetails/")
  }

  addPaymentDetails(payment_detail_obj: PaymentDetails): Observable<PaymentDetails> {
    return this.httpClient.post<PaymentDetails>(this.payment_url + "/PaymentDetails/", JSON.stringify(payment_detail_obj), this.httpOptions)
  }
}
