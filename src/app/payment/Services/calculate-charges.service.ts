import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateChargesService {

  idv_rate?: number;
  presentdate: Date = new Date();
  presentyear: number = this.presentdate.getFullYear();
  diff?: number;
  idv: number = 0;
  premium: number = 0;

  
  constructor() { }

  getVehicleDetails()
  {

  }
  calculatePremium(calculate_premium_form : any, ) {
    console.log(calculate_premium_form);
    this.diff = (this.presentyear - calculate_premium_form.year);
    console.log(this.presentyear);

    console.log(this.diff);

    //  if(this.diff>= 1 && this.diff < 2){this.idv_rate=0.15; console.log(0.15)} 
    //  else if(this.diff>=2 && this.diff<3){this.idv_rate=0.20;console.log(0.20)}
    //  else if(this.diff>=3 && this.diff<4){this.idv_rate=0.30;console.log(0.30)} 
    //  else if(this.diff>=4 && this.diff<5){this.idv_rate=0.40;console.log(0.40)} 
    //  else if(this.diff>=5){this.idv_rate=0.5;console.log(0.5)}
    //  else {this.idv_rate=0.05; console.log(0.05)}

    if (this.diff == 1) { this.idv_rate = 0.15; console.log(0.15) }
    else if (this.diff == 2) { this.idv_rate = 0.20; console.log(0.20) }
    else if (this.diff == 3) { this.idv_rate = 0.30; console.log(0.30) }
    else if (this.diff == 4) { this.idv_rate = 0.40; console.log(0.40) }
    else if (this.diff >= 5) { this.idv_rate = 0.5; console.log(0.5) }
    else { this.idv_rate = 0.05; console.log(0.05) }

    this.idv = calculate_premium_form.price - this.idv_rate * calculate_premium_form.price;
    console.log(this.idv)
    return this.premium = this.idv * 0.02
  }

  calculatePlanAmount()
  {

  }
}
