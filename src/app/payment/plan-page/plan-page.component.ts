import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccessPlanDetailsService } from '../Services/access-plan-details.service';

// -------------------------------------------------------
import { InsuranceDetails } from '../Models/insurance-details';
import { TransferBuyInsuranceDetailsService } from '../Services/transfer-buy-insurance-details.service';


@Component({
  selector: 'app-plan-page',
  templateUrl: './plan-page.component.html',
  styleUrls: ['./plan-page.component.css']
})
export class PlanPageComponent implements OnInit {
  year_list = [1, 2, 3, 5]

  // -------- value from web api stored in this array ----------------------------
  // plan details -> stored in -> insuranceDetails Table
  plan_page_array: InsuranceDetails[] = []


  // -------------- form variable used to submit and store in datbase using api -------------------------
  plan_page_form!: FormGroup;
  plan_page_obj!: InsuranceDetails;


  // ----- NOTE ---------- this shld be done after payment.... this is just a demo---------------------------------
  min = 10000000000000000000;
  max = 99999999999999999999;
  policy_no!: number

  // initial value in form ---------------------------------------------------------------------------------------
  money: number = 10000.000
  years!: number

  constructor(private plan_page_service: AccessPlanDetailsService,
    private transfer_service: TransferBuyInsuranceDetailsService) { }

  ngOnInit(): void {
    this.policy_no = this.getRandomInt(this.min, this.max);
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

  // ----- NOTE ---------- this shld be done after payment.... this is just a demo---------------------------------
  getRandomInt(min: any, max: any) {
    min = Math.ceil(min);
    max = Math.floor(max);
    console.log(Math.floor(Math.random() * (max - min + 1)) + min)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  showPlanDetails() {
    console.log(this.plan_page_form.value)
  }

  //------------------- submit Plan details -----------------------------------
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
