import { Component, OnInit } from '@angular/core';
import { Claim } from '../Models/claim';
import { ClaimViewService } from '../claim-view.service';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {

  claim: Claim[] = [];

  constructor(public service : ClaimViewService) { }

  ngOnInit(): void
   {
        this.service.getAll().subscribe((data:Claim[])=>{
            console.log(data);
            this.claim = data;
          })
      
  }

}
