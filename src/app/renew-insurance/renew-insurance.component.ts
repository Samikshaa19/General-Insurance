import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InsuranceDetails } from '../Models/insurance-details';

import { AccessPlanDetailsService } from '../Services/access-plan-details.service';

@Component({
  selector: 'app-renew-insurance',
  templateUrl: './renew-insurance.component.html',
  styleUrls: ['./renew-insurance.component.css']
})
export class RenewInsuranceComponent implements OnInit {

  // --------basic-------------------------------------------------------------------------------------------------
  year_list = [1, 2, 3, 5]
  renew_plan_page_form!: FormGroup;
  renew_plan_page_array: InsuranceDetails[] = []
  renew_plan_page_obj!: InsuranceDetails;

  // ----- NOTE ---------- this shld be done after payment.... this is just a demo---------------------------------
  min = 10000000000000000000;
  max = 99999999999999999999;
  policy_no!: number


  // initial value in form ---------------------------------------------------------------------------------------
  money: number = 10000.000
  years!: number
  constructor(private renew_plan_page_service: AccessPlanDetailsService) { }

  ngOnInit(): void {
    this.policy_no = this.renew_plan_page_service.generateNewPolicyNo();

    this.renew_plan_page_form = new FormGroup(
      {
        policyNo: new FormControl(String(this.policy_no)),
        amountPaid: new FormControl(Number(this.money)),
        policyDate: new FormControl("31/12/1999"),
        insurancePlan: new FormControl(),
        numberOfYears: new FormControl(),
        emailId: new FormControl("suraj.prabhu@lnt.com")
      })

      // this helps in getting the data from API store it in the array for display purpose -----------
    this.renew_plan_page_service.getPlanDetails().subscribe((data: InsuranceDetails[]) => {
      console.log(data);
      this.renew_plan_page_array = data;
    })
  }

  // ------------ To check details in console.log ----------------------------
  showRenewPlanDetails() {
    console.log(this.renew_plan_page_form.value)
  }

  submitRenewPlanDetails() {
    
    this.renew_plan_page_obj = this.renew_plan_page_form.value
    this.renew_plan_page_obj.numberOfYears = Number(this.renew_plan_page_obj.numberOfYears)

    this.renew_plan_page_service.addPlanDetails(this.renew_plan_page_obj).subscribe(data => {
      console.log(data)
      console.log("Plan Details Updated!!")
    })
    console.log(this.renew_plan_page_form.value);
  }

}
