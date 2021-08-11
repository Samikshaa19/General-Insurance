import { Injectable } from '@angular/core';

// this INSURANCE DETAILS comes from PLAN page----------------------------------
import { InsuranceDetails } from '../Models/insurance-details';
// this VEHICLE DETAILS comes from BUY-INSURANCE page----------------------------------
import { VehicleDetails } from '../Models/vehicle-details';

@Injectable({
  providedIn: 'root'
})
export class TransferBuyInsuranceDetailsService {

  private vehicle_details!: any;
  private plan_details!: any;

  constructor() { }

  // ----------- get and set the data from buy-insurance and plan-page components ---------------
  setVehicleDetails(data:any){
    console.log("Vehicle Detail set")
    this.vehicle_details = data;
  }
  setPlanDetails(data:any){
    console.log("Plan Detail set")
    this.plan_details = data;
  }

  // ------------ return the data -----------------------
  getVehicleDetails(){
    console.log("Vehicle Detail get")
    let temp = this.vehicle_details;
    this.clearVehicleDetails();
    return temp;
  }
  getPlanDetails(){
    console.log("Plan Detail get")
    let temp = this.plan_details;
    this.clearPlanDetails();
    return temp;
  }

  // -------- clear the data -------------------------
  clearVehicleDetails(){
    console.log("cleared Vehicle Detail")
    this.vehicle_details = undefined;
  }
  clearPlanDetails(){
    console.log("cleared Plan Detail")
    this.plan_details = undefined;
  }


}
