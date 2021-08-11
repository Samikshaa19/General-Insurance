import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VehicleDetails } from '../Models/vehicle-details';

@Component({
  selector: 'app-add-vehicle-details',
  templateUrl: './add-vehicle-details.component.html',
  styleUrls: ['./add-vehicle-details.component.css']
})
export class AddVehicleDetailsComponent implements OnInit {

  add_vehicle_detail_form! : FormGroup
  vehicle_detail! : VehicleDetails
  constructor() { }

  ngOnInit(): void {
    // this.add_vehicle_detail_form = this.FormGroup({
    //   ''
    // })
  }

}
