
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {
  Payment = new FormGroup({
    cname:new FormControl('',[Validators.required, Validators.minLength(3),Validators.pattern('^[A-Z]$')]),
    ccnum: new FormControl('',[Validators.required, Validators.minLength(20),Validators.pattern('^[0-9]$')]),
    expmonth: new FormControl('',[Validators.required, Validators.minLength(3),Validators.pattern('^[A-Z]$')]),
    expyear: new FormControl('',[Validators.required, Validators.minLength(4),Validators.pattern('^[A-Z0-9]$')]),
    ifsc: new FormControl('',[Validators.required, Validators.minLength(11),Validators.pattern('^[0-9]$')]),
    cvv: new FormControl('',[Validators.required, Validators.minLength(3),Validators.pattern('^[0-9]$')])
  })
  constructor() { }

  ngOnInit(): void {
  }
  get cname1(){
    return this.Payment.get('cname');
  }
  
  get ccnum1(){
    return this.Payment.get('ccnum');
  }
  
  get expmonth1(){
    return this.Payment.get('expmonth');
  }
  
  get expyear1(){
    return this.Payment.get('expyear');
  }
  
  get ifsc1(){
    return this.Payment.get('ifsc');
  }
  get cvv1(){
    return this.Payment.get('cvv');
  }

  pay(){
    console.log(this.Payment.value);
  }
}
