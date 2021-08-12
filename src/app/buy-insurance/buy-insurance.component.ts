import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

///------------------------------------------------------------------
import { VehicleDetails } from '../Models/vehicle-details';
import { InsuranceDetails } from '../Models/insurance-details';
import { DisplayVehicalDetailsService } from '../Services/display-vehical-details.service';
import { TransferBuyInsuranceDetailsService } from '../Services/transfer-buy-insurance-details.service';
import { AccessPlanDetailsService } from '../Services/access-plan-details.service';

@Component({
  selector: 'app-buy-insurance',
  templateUrl: './buy-insurance.component.html',
  styleUrls: ['./buy-insurance.component.css']
})
export class BuyInsuranceComponent implements OnInit {

  //==================================  VEHICLE PAGE ==============================================================
  // -------- value from web api stored in this array ---------------------------------------------------
  vehicle_detail_array!: VehicleDetails[]
  // -------------- form variable used to submit and store in datbase using api -------------------------
  vehicle_detail_form!: FormGroup;
  vehicle_detail_obj!: VehicleDetails

  //================================== PLAN PAGE ==================================================================
  year_list = [1, 2, 3, 5]
  // -------- value from web api stored in this array ----------------------------------------------------
  // plan details -> stored in -> insuranceDetails Table
  plan_page_array: InsuranceDetails[] = []
  // -------------- form variable used to submit and store in datbase using api ----------------------------
  plan_page_form!: FormGroup;
  plan_page_obj!: InsuranceDetails;
  // ----- NOTE ---------- this shld be done after payment.... this is just a demo----------------------------
  policy_no!: number
  // initial value in form -----------------------------------------------------------------------------------
  money: number = 10000.000
  years!: number

  // ============================== CONSTRUCTOR ====================================================================
  constructor(public vehicle_service: DisplayVehicalDetailsService,
    public plan_page_service: AccessPlanDetailsService,
    public transfer_service: TransferBuyInsuranceDetailsService) { }


  // ============================== NG-INIT ========================================================================
  ngOnInit(): void {
    //================= VEHICLE DETAIL PAGE FORM ==============================================
    this.vehicle_detail_form = new FormGroup({
      vehicleType: new FormControl(),
      manufacturerName: new FormControl('', [Validators.required]),
      modelName: new FormControl('', [Validators.required]),
      drivingLicense: new FormControl('', [Validators.required]),
      purchaseDate: new FormControl('', [Validators.required]),
      registrationNo: new FormControl('', [Validators.required]),
      engineNo: new FormControl('', [Validators.required]),
      chassisNo: new FormControl('', [Validators.required]),
      emailId: new FormControl("suraj.prabhu@lnt.com")

      // vehicletype: new FormControl(),
      // registrationNo: new FormControl('', [Validators.required]),
      // manufacturerName: new FormControl('', [Validators.required]),
      // modelName: new FormControl('', [Validators.required]),
      // drivingLicense: new FormControl('', [Validators.required]),
      // purchaseDate: new FormControl('', [Validators.required]),
      // engineNo: new FormControl('', [Validators.required]),
      // chassisNo: new FormControl('', [Validators.required])
    })

    // ------------------ display data in log -------------------------------------
    this.vehicle_service.getAll().subscribe((data: VehicleDetails[]) => {
      console.log(data);
      this.vehicle_detail_array = data;
    })

    // ------------------transfer details ---------------------------------------
    // this.transfer_service.setVehicleDetails(this.vehicle_detail_form.value) 

    //================= PLAN PAGE FORM =====================================================
    this.policy_no = this.plan_page_service.generateNewPolicyNo();
    this.plan_page_form = new FormGroup(
      {
        policyNo: new FormControl(String(this.policy_no)),
        amountPaid: new FormControl(Number(this.money)),
        policyDate: new FormControl("31/12/1999"),
        insurancePlan: new FormControl(),
        numberOfYears: new FormControl(),
        emailId: new FormControl("suraj.prabhu@lnt.com")
      })

    // ------------------ display data in log -------------------------------------
    this.plan_page_service.getPlanDetails().subscribe((data: InsuranceDetails[]) => {
      console.log(data);
      this.plan_page_array = data;
    })

    // ------------ transfering the data ----------------------------------
    // this.transfer_service.setPlanDetails(this.plan_page_form.value) 

  }

  //================= VEHICLE DETAILS SUBMIT =================================================

  //------------------- submit Vehicle details -----------------------------------
  submitVehicleDetails() {
    this.vehicle_detail_obj = this.vehicle_detail_form.value

    localStorage.setItem("vehicle-details", JSON.stringify(this.vehicle_detail_obj));
    // transfer details 
    // this.transfer_service.setVehicleDetails(this.vehicle_detail_obj) 

    this.vehicle_service.addVehicleDetails(this.vehicle_detail_obj).subscribe(data => {
      console.log(data)
      console.log("Vehicle Details Added!!")
    })
    console.log(this.vehicle_detail_form.value);
  }
  // ------------------ get Methods for Vehicle details -------------------------------------
  get vehicletype1() {
    return this.vehicle_detail_form.get('vehicletype');
  }
  get manufacturer1() {
    return this.vehicle_detail_form.get('manufacturer');
  }
  get model1() {
    return this.vehicle_detail_form.get('model');
  }
  get drivinglicense1() {
    return this.vehicle_detail_form.get('drivinglicense');
  }
  get purchasedate1() {
    return this.vehicle_detail_form.get('purchasedate');
  }
  get registrationnumber1() {
    return this.vehicle_detail_form.get('registrationnumber');
  }
  get enginenumber1() {
    return this.vehicle_detail_form.get('enginenumber');
  }
  get chassisnumber1() {
    return this.vehicle_detail_form.get('chassisnumber');
  }

  // getToday(): string {
  //   // return new Date().toISOString().split('T')[0]
  //   return new this.date
  // }
  showPlanDetails() {
    console.log(this.plan_page_form.value)
  }

  //================= PLAN DETAILS SUBMIT =================================================
  submitPlanDetails() {
    this.plan_page_obj = this.plan_page_form.value
    // ---- using transfer service -----------------------------------
    // this.transfer_service.setPlanDetails(this.plan_page_obj)

    // let myObj = { name: 'Nixon', profession: 'Developer' };
    localStorage.setItem("plan-details", JSON.stringify(this.plan_page_obj));

    this.plan_page_obj.numberOfYears = Number(this.plan_page_obj.numberOfYears)

    this.plan_page_service.addPlanDetails(this.plan_page_obj).subscribe(data => {
      console.log(data)
      console.log("Plan Details Added!!")
    })
    console.log(this.plan_page_form.value);
  }

  get plan() {
    return this.plan_page_form.get('insurancePlan');
  }

  get noOfYears() {
    return this.plan_page_form.get('numberOfYears');
  }
}

