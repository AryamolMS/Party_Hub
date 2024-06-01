import { Component } from '@angular/core';
import { partyModel } from '../parties.model';
import { UserapiService } from '../services/userapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parties-add',
  templateUrl: './parties-add.component.html',
  styleUrls: ['./parties-add.component.css']
})
export class PartiesAddComponent {
  party:partyModel={}

  constructor(private api:UserapiService, private router:Router){}

  cancelParty(){
    this.party={}
  }

  addParty(){
    console.log(this.party);
    if (!this.party.id || !this.party.name || !this.party.company_name || !this.party.gstin || !this.party.mobile_no || !this.party.credit_limit || !this.party.email || !this.party.remark || !this.party.address) {
      
    } else {
      this.api.addPartyApi(this.party).subscribe({
        next:(res:partyModel)=>{
          console.log(res);
          alert("Party details added successfully")
          this.party={}
          this.router.navigateByUrl('parties-list')
      },
      error:(res:any)=>{
        console.log(res);
        
      }
    })
  }
  }
}
