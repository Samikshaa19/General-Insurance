import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BuyInsuranceComponent } from './buy-insurance/buy-insurance.component';
import { ClaimInsuranceComponent } from './claim-insurance/claim-insurance.component';
import { PlanPageComponent } from './plan-page/plan-page.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ShowVehicleDetailsComponent } from './show-vehicle-details/show-vehicle-details.component';
import { AddVehicleDetailsComponent } from './add-vehicle-details/add-vehicle-details.component';
import { RenewInsuranceComponent } from './renew-insurance/renew-insurance.component';
import { VerifyDetailsPageComponent } from './verify-details-page/verify-details-page.component';
import { PaymentComponent } from './payment/payment.component';
import { CalculatePremiumComponent } from './calculate-premium/calculate-premium.component';
import { PayComponent } from './pay/pay.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    BuyInsuranceComponent,
    ClaimInsuranceComponent,
    PlanPageComponent,
    ShowVehicleDetailsComponent,
    AddVehicleDetailsComponent,
    RenewInsuranceComponent,
    VerifyDetailsPageComponent,
    PaymentComponent,
    CalculatePremiumComponent,
    PayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
