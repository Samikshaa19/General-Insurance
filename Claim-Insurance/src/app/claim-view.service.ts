import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Claim } from './Models/claim';



@Injectable({
  providedIn: 'root'
})
export class ClaimViewService 
{

  private ApiUrl = "http://localhost:46234/api"

  httpOptions =
  {
    headers: new HttpHeaders //Add Dependancies Which Has Mentioned Above
    ({
      'Content-Type': 'application/json' //Contain Type Getting Ang Passing To API
    }),
  }

  constructor(private httpClient : HttpClient) { }

//This Will Show Details Present On Server 
  getAll():Observable<Claim[]>
  {
    return this.httpClient.get<Claim[]>(this.ApiUrl + '/claimrequests/')
  }

  // create
  create(product:any): Observable<Claim>
  {
    return this.httpClient.post<Claim>(this.ApiUrl + '/claimrequests/', JSON.stringify(product), this.httpOptions)    
  } 
  
}
