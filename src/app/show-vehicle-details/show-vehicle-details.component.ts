import { Component, OnInit } from '@angular/core';

import { VehicleDetails } from '../Models/vehicle-details';
import { DisplayVehicalDetailsService } from '../Services/display-vehical-details.service';

@Component({
  selector: 'app-show-vehicle-details',
  templateUrl: './show-vehicle-details.component.html',
  styleUrls: ['./show-vehicle-details.component.css']
})
export class ShowVehicleDetailsComponent implements OnInit {

  vehicle_detail_list : VehicleDetails[] = []
  constructor(public service : DisplayVehicalDetailsService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((data: VehicleDetails[]) => {
      this.vehicle_detail_list = data;
      console.log(data);
    })
  }

}
