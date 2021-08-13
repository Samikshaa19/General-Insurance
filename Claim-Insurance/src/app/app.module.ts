import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClaimComponent } from './claim/claim.component';

import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './create/create.component';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { createComponent } from '@angular/compiler/src/core';
import { FAQComponent } from './faq/faq.component';


const appRoutes :Routes =
[
  {path:'ClaimView' , component: ClaimComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ClaimComponent,
    CreateComponent,
    FAQComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
