import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClaimViewService } from '../claim-view.service';
import { Claim } from '../Models/claim';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  ClaimForm!: FormGroup;
  claim!: Claim;
  SelectedPolicyNumber!:string ;
  reasons=['Road Accident','Natural Disaster','Man-made Disaster','Theft']


  constructor(
    // public cb: FormBuilder,
    // private router: Router,
    public service:ClaimViewService
  ){ }


  ngOnInit() 
  {
    this.ClaimForm = new FormGroup
    ({
    crId:new FormControl ('Default',[Validators.required]),
    requestDate:new FormControl('2012-12-12'),
    reason: new FormControl ('',[Validators.required]),
    approval:new FormControl ('False',[Validators.required]),
    claimAmount:new FormControl ('',[Validators.required]),    
    damageProofUrl:new FormControl ('',[Validators.required]),
    policyNo:new FormControl('18165864424034466011',[])
  })   
  }
  

  get crId1()
  {
    return this.ClaimForm.get('crId');
  }


  get requestDate1()
  {
    return this.ClaimForm.get('requestDate');
  }


  get reason1()
  {
    return this.ClaimForm.get('dreason');
  }

  get damageProofUrl1()
  {
    return this.ClaimForm.get('damageProofUrl');
  }

  get policyNo1()
  {
    return this.ClaimForm.get('policyNo');
  }

  get approval1()
  {
    return this.ClaimForm.get('approval');
  }

  get claimAmount1()
  {
    return this.ClaimForm.get('claimAmount');
  }

  Onsubmit()
  {
    alert("Your Data Has Been Stored Sucessfully")

  }

  submitForm()
 {

    // this.SelectedPolicyNumber= this.ClaimForm.value.policyNo
    this.claim=this.ClaimForm.value
    console.log(this.claim)
    this.service.create(this.ClaimForm.value).subscribe(res =>
      {
      console.log(res)
      console.log('Data uploaded Sucessfully!')
     // this.router.navigateByUrl('/home/')
   });
  } 
}
