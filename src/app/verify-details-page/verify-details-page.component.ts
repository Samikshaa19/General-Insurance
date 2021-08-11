import { Component, OnInit } from '@angular/core';
import { InsuranceDetails } from '../Models/insurance-details';
import { VehicleDetails } from '../Models/vehicle-details';

// ----------------------------------------------------------
import { TransferBuyInsuranceDetailsService } from '../Services/transfer-buy-insurance-details.service';

@Component({
  selector: 'app-verify-details-page',
  templateUrl: './verify-details-page.component.html',
  styleUrls: ['./verify-details-page.component.css']
})
export class VerifyDetailsPageComponent implements OnInit {

  plan_page_array!: InsuranceDetails[]
  vehicle_detail_array!: any[]
  today!: any
  constructor(private transfer_service: TransferBuyInsuranceDetailsService) { }

  ngOnInit(): void {
    // this.plan_page_array = JSON.parse(localStorage.getItem('plan-details')!);
    // this.plan_page_array = [JSON.parse(localStorage.getItem('plan-details')!)];
    // this.vehicle_detail_array = [JSON.parse(localStorage.getItem('plan-details')!)];
    console.log("Inside Verify Detail page");
    // this.vehicle_detail_array = this.transfer_service.getVehicleDetails();
    // this.plan_page_array = this.transfer_service.getPlanDetails();

    // Display -----------------------------------------
    console.log(this.vehicle_detail_array);
    console.log("Plan Details"+this.plan_page_array);

  }
  // Refresh--------------------------------
  refresh()
  {
    // this.today = new Date().toISOString().split('T')[0];
    // this.today = String(new Date());
    this.plan_page_array = [JSON.parse(localStorage.getItem('plan-details')!)];
    this.vehicle_detail_array = [JSON.parse(localStorage.getItem('vehicle-details')!)];
    console.log(this.plan_page_array)
  }
  
}
