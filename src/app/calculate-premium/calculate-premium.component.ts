import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CalculateChargesService } from '../Services/calculate-charges.service';


@Component({
  selector: 'app-calculate-premium',
  templateUrl: './calculate-premium.component.html',
  styleUrls: ['./calculate-premium.component.css']
})
export class CalculatePremiumComponent implements OnInit {

  idv_rate?: number;
  presentdate: Date = new Date();
  presentyear: number = this.presentdate.getFullYear();
  diff?: number;
  idv: number = 0;
  premium: number = 0;
  calculate_premium_form! : FormGroup

  constructor(public calculate_amount: CalculateChargesService) { }
  
  ngOnInit(): void {
    this.calculate_premium_form = new FormGroup({
      model: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern('^[A-Z]$')]),
      year: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern('^[0-9]$')]),
      price: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern('^[0-9]$')])
    })
  }
  get model1() {

    return this.calculate_premium_form.get('model');
  }

  get price1() {
    return this.calculate_premium_form.get('price');
  }
  get year1() {
    return this.calculate_premium_form.get('year');
  }

  calculatePremium() {
    console.log("Inside Calculate Premium")
    this.premium = this.calculate_amount.calculatePremium(this.calculate_premium_form.value)
  }
  // check() {
  //   console.log(this.Premium.value);
  //   this.diff = (this.presentyear - this.Premium.value.year);
  //   console.log(this.presentyear);

  //   console.log(this.diff);

  //   //  if(this.diff>= 1 && this.diff < 2){this.idv_rate=0.15; console.log(0.15)} 
  //   //  else if(this.diff>=2 && this.diff<3){this.idv_rate=0.20;console.log(0.20)}
  //   //  else if(this.diff>=3 && this.diff<4){this.idv_rate=0.30;console.log(0.30)} 
  //   //  else if(this.diff>=4 && this.diff<5){this.idv_rate=0.40;console.log(0.40)} 
  //   //  else if(this.diff>=5){this.idv_rate=0.5;console.log(0.5)}
  //   //  else {this.idv_rate=0.05; console.log(0.05)}

  //   if (this.diff == 1) { this.idv_rate = 0.15; console.log(0.15) }
  //   else if (this.diff == 2) { this.idv_rate = 0.20; console.log(0.20) }
  //   else if (this.diff == 3) { this.idv_rate = 0.30; console.log(0.30) }
  //   else if (this.diff == 4) { this.idv_rate = 0.40; console.log(0.40) }
  //   else if (this.diff >= 5) { this.idv_rate = 0.5; console.log(0.5) }
  //   else { this.idv_rate = 0.05; console.log(0.05) }

  //   this.idv = this.Premium.value.price - this.idv_rate * this.Premium.value.price;
  //   console.log(this.idv)
  //   this.premium = this.idv * 0.02
  // }


}
