import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';

// ---------------------------------------------------------------------
import { PaymentDetails } from '../Models/payment-details';
import { PaymentService } from '../Services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  payment_detail_form!: FormGroup

  payment_detail_array!: PaymentDetails[]
  payment_detail_obj!: PaymentDetails

  successful_payment = 'Payment is Successful'
  unsuccessful_payment = 'Payment is UnSuccessful'
  payment_status!: boolean
  // status=(String(this.payment_detail_form.value.cardName).length>=2 &&
  // String(this.payment_detail_form.value.accountNo).length>=9 &&
  // String(this.payment_detail_form.value.expYear).length==10 &&
  // String(this.payment_detail_form.value.ifscCode).length==11 &&
  // String(this.payment_detail_form.value.cvv).length==3)
  status!:boolean

  constructor(private payment_service: PaymentService) { }

  ngOnInit(): void {
    this.payment_detail_form = new FormGroup({
      cardName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      accountNo: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(20), Validators.pattern('^[0-9]$')]),
      expMonth: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[A-Z]$')]),
      expYear: new FormControl('', [Validators.required]),
      ifscCode: new FormControl('', [Validators.required, Validators.minLength(11), Validators.pattern('^[0-9]$')]),
      cvv: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[0-9]$')]),
      emailId: new FormControl('suraj.prabhu@lnt.com')
    })

    // ------------------ display data in log -------------------------------------
    this.payment_service.getPaymentDetails().subscribe((data: PaymentDetails[]) => {
      console.log(data);
      this.payment_detail_array = data;
    })
  }

  //------------------- submit Payment details -----------------------------------
  submitPaymentDetails() {
    if (String(this.payment_detail_form.value.cardName).length >= 2 &&
      String(this.payment_detail_form.value.accountNo).length >= 9 &&
      String(this.payment_detail_form.value.expYear).length == 10 &&
      String(this.payment_detail_form.value.ifscCode).length == 11 &&
      String(this.payment_detail_form.value.cvv).length == 3) {

      this.status = ((this.payment_detail_form.value.cardName).length >= 2 &&
        (this.payment_detail_form.value.accountNo).length >= 9 &&
        (this.payment_detail_form.value.expYear).length >= 10 &&
        (this.payment_detail_form.value.ifscCode).length >= 11 &&
        (this.payment_detail_form.value.cvv).length >= 3)

      // this.payment_detail_obj = this.payment_detail_form.value
      this.payment_detail_obj = new PaymentDetails(
        this.payment_detail_form.value.accountNo,
        this.payment_detail_form.value.ifscCode,
        this.payment_detail_form.value.emailId
      )
      console.log(this.payment_detail_obj)

      // storing in local storage
      // localStorage.setItem("payment-details", JSON.stringify(this.payment_detail_obj));

      // transfer details 
      // this.transfer_service.setVehicleDetails(this.vehicle_detail_obj) 

      this.payment_service.addPaymentDetails(this.payment_detail_obj).subscribe(data => {
        console.log(data)
        console.log("Plan Details Added!!")
      })
      console.info('Payment Successful')
      this.payment_status = true

    }
    else {
      this.payment_status = false
      console.log()
    }
  }
  // Custom Validators ---------------------------------------------------------
  AccountNameValidator(data: any) {
    const charCode = (data.which) ? data.which : data.keyCode;
    if (charCode > 31 && (charCode < 64 || charCode > 91) && (charCode < 96 || charCode > 123)) {
      console.log('charCode restricted is ' + charCode);
      return false;
    }
    return true;
  }
  AccountNumberValidator(data: any) {
    const charCode = (data.which) ? data.which : data.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      console.log('charCode restricted is ' + charCode);
      return false;
    }
    return true;
  }
  IfscCodeValidator(data: any) {
    const charCode = (data.which) ? data.which : data.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode != 45)
      && (charCode < 64 || charCode > 91) && (charCode < 96 || charCode > 123)) {
      console.log('charCode restricted is ' + charCode);
      return false;
    }
    return true;
  }
  CvvValidator(data: any) {
    const charCode = (data.which) ? data.which : data.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      console.log('charCode restricted is ' + charCode);
      return false;
    }
    return true;
  }


  // get Methods ---------------------------------------------------------------
  get cardName1() {
    return this.payment_detail_form.get('cardName');
  }

  get accountNo1() {
    return this.payment_detail_form.get('accountNo');
  }

  get expMonth1() {
    return this.payment_detail_form.get('expMonth');
  }

  get expYear1() {
    return this.payment_detail_form.get('expYear');
  }

  get ifscCode1() {
    return this.payment_detail_form.get('ifscCode');
  }
  get cvv1() {
    return this.payment_detail_form.get('cvv');
  }

  pay() {
    console.log(this.payment_detail_form.value);
  }
}

