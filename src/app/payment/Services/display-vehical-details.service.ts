import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { VehicleDetails } from '../Models/vehicle-details';

@Injectable({
  providedIn: 'root'
})
export class DisplayVehicalDetailsService {

  // --------------- declare the link 
  private vehicle_url = "http://localhost:25456/api"

  constructor(private httpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      // This tells that the content received is in JSON
      'Content-Type': 'application/json'
    })
  }

  // ----------------display details-------------------------------------
  getAll(): Observable<VehicleDetails[]> {
    return this.httpClient.get<VehicleDetails[]>(this.vehicle_url + '/VehicleDetails/')
  }
  // ----------------add details-------------------------------------
  addVehicleDetails(vehicle_obj : VehicleDetails):Observable<VehicleDetails[] >{
    return this.httpClient.post<VehicleDetails[]>(this.vehicle_url+"/VehicleDetails/", JSON.stringify(vehicle_obj), this.httpOptions)
  }


}
