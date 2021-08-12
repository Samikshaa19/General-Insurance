import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { InsuranceDetails } from '../Models/insurance-details';
import { RenewPolicyDetails } from '../Models/renew-policy-details';
import { AccessPlanDetailsService } from '../Services/access-plan-details.service';
import { AccessRenewPolicyDetailsService } from '../Services/access-renew-policy-details.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-renew-insurance',
  templateUrl: './renew-insurance.component.html',
  styleUrls: ['./renew-insurance.component.css']
})
export class RenewInsuranceComponent implements OnInit {

  // ============================= Renew Plan Page ==========================================================
  // --------basic-------------------------------------------------------------------------------------------------
  year_list = [1, 2, 3, 5]
  renew_plan_page_form!: FormGroup;
  renew_plan_page_array: InsuranceDetails[] = []
  renew_plan_page_obj!: InsuranceDetails;

  // ----- NOTE ---------- this shld be done after payment.... this is just a demo---------------------------------
  min = 10000000000000000000;
  max = 99999999999999999999;
  new_policy_no!: number

  // initial value in form ----------------------------------------------------------
  money: number = 10000.000
  years!: number

  // ------------------------------- latest 12/08/2021 ------------------------------------------------
  // logged_in_email: string = "suraj.prabhu@lnt.com"
  logged_in_email: string = "samiksha.gupta@lnt.com"
  selected_policy_no!: string
  selected_policy_no_detail_array!: InsuranceDetails[]
  current_date!: any
  new_policy_date!: any

  // ============================= Renew Plan Page ==========================================================
  // renew_policy_details_form!: FormGroup;
  renew_policy_details_array: RenewPolicyDetails[] = []
  renew_policy_details_obj!: RenewPolicyDetails;

  constructor(private renew_plan_page_service: AccessPlanDetailsService,
    private renew_policy_details_service: AccessRenewPolicyDetailsService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.new_policy_no = this.renew_plan_page_service.generateNewPolicyNo();

    // ------------------ Renew Plan Page Form ------------------------------------------------------------
    this.renew_plan_page_form = new FormGroup(
      {
        policyNo: new FormControl(String(this.new_policy_no)),
        amountPaid: new FormControl(Number(this.money)),
        // policyDate: new FormControl(this.new_policy_date),
        policyDate: new FormControl(this.getCurrentDate()),
        insurancePlan: new FormControl(),
        numberOfYears: new FormControl(),
        emailId: new FormControl(this.logged_in_email)
      })

    // this.renew_plan_page_form = new FormGroup(
    //   {
    //     policyNo: new FormControl(String(this.policy_no)),
    //     amountPaid: new FormControl(Number(this.money)),
    //     policyDate: new FormControl(this.new_policy_date),
    //     insurancePlan: new FormControl(),
    //     numberOfYears: new FormControl(),
    //     emailId: new FormControl("suraj.prabhu@lnt.com")
    //   })

    // this helps in getting the data from API store it in the array for display purpose -----------
    this.renew_plan_page_service.getPlanDetails().subscribe((data: InsuranceDetails[]) => {
      console.log(data);
      this.renew_plan_page_array = data;
    })

    // ------------------ Renew Policy Detail Form ----------------------------------------------------------------
    this.renew_policy_details_obj = new RenewPolicyDetails(String(this.new_policy_no), String(this.selected_policy_no))

    // this helps in getting the data from API store it in the array for display purpose -----------
    this.renew_policy_details_service.getRenewPolicyDetails().subscribe((data: RenewPolicyDetails[]) => {
      console.log(data);
      this.renew_policy_details_array = data;
    })

  }

  // ------------ To check details in console.log --------------------------------------
  showRenewPlanDetails() {
    console.log(this.renew_plan_page_form.value)
  }

  // ------------ To Submit details and display in console.log -------------------------
  submitRenewDetails() {
    // _________________________Plan Page_________________________________
    this.renew_plan_page_obj = this.renew_plan_page_form.value
    this.renew_plan_page_obj.numberOfYears = Number(this.renew_plan_page_obj.numberOfYears)
    this.renew_plan_page_obj.policyDate = this.getNextpolicyDate()

    this.renew_plan_page_service.addPlanDetails(this.renew_plan_page_obj).subscribe(data => {
      console.log(data)
      console.log("New Plan Details Added!!")
    })
    console.log(this.renew_plan_page_form.value);

    // _________________________Renew Policy Details _________________________________
    // this.renew_policy_details_obj = this.renew_policy_details_form.value
    this.renew_policy_details_service.addRenewPolicyDetails(this.renew_policy_details_obj).subscribe(data => {
      console.log(data)
      console.log("Renew Policy Details Added!!")
    })
    console.log(this.renew_policy_details_obj);
  }

  // ------------------------------------- Storing the data in Local Storage ------------------------------------
  storeRenewDetails() {
    // Storing renew_plan_page_details -- 1
    console.log("storing the renew data................")
    this.renew_plan_page_obj = this.renew_plan_page_form.value
    localStorage.setItem("renew-insurance-details", JSON.stringify(this.renew_plan_page_obj));
    // Storing renew_policy_details about old and new policy number -- 2
    this.renew_policy_details_obj = new RenewPolicyDetails(String(this.new_policy_no), String(this.selected_policy_no))
    localStorage.setItem("renew-policy-no-details", JSON.stringify(this.renew_policy_details_obj));
    console.log("Data Stored Successfully!")
    this.router.navigate(['payment']);
  }

  // ================================= FILTERS =============================================
  // --------------- Filter rows based on Email--------------------------------------------
  dataBasedOnEmail() {
    return this.renew_plan_page_array.filter(data => this.logged_in_email === data.emailId)
  }

  // --------------- Filter rows based on Selected Policy Number--------------------------------
  dataBasedOnPolicyNo() {
    this.selected_policy_no_detail_array = this.renew_plan_page_array.filter(data => this.selected_policy_no === data.policyNo)
    return this.selected_policy_no_detail_array
  }

  //  
  // checkRenewedPolicyNo() {
  //   return this.renew_policy_details_array
  // }
  // ================================= DATE BASED FUNCTIONS =============================================
  // ----------------------- Current Date--------------------------------------------
  getCurrentDate() {
    // https://stackoverflow.com/questions/40526102/how-do-you-format-a-date-time-in-typescript
    // British English uses day-month-year order and 24-hour time without AM/PM
    // console.log(event.toLocaleString('en-GB',{ timeZone: 'UTC' }));
    // expected output: 20/12/2012, 03:00:00
    // return (new Date().toLocaleString('en-GB', { timeZone: 'UTC' }));   
    // new Date().toLocaleString()
    // > "11/10/2016, 11:49:36 AM"
    this.current_date = new Date().toLocaleString('en-GB').substring(0, 10)
    // console.log("Type Of Date: " + typeof (this.current_date))
    return this.current_date;
  }

  getNextpolicyDate() {
    let date = this.current_date
    let prev_year = Number(date.substring(6, 10))
    let years_to_be_added = this.selected_policy_no_detail_array[0].numberOfYears
    let new_year = prev_year + years_to_be_added
    let new_date = date.substring(0, 6) + String(new_year)
    // this.new_policy_date = new_date
    return new_date
    // console.log(date)
    // console.log(years_to_be_added)
    // console.log(new_year)
    // console.log(new_date)
  }

  //  ---------------------- Passing Policy Number internally when Renew Button is clicked ------------------------
  passPolicyNo(policyNo: any) {
    this.selected_policy_no = policyNo
    // localStorage.setItem("plan-details", JSON.stringify(this.plan_page_obj));

  }





}