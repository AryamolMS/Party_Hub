import { Component, OnInit } from '@angular/core';
import { UserapiService } from '../services/userapi.service';
import { partyModel } from '../parties.model';

@Component({
  selector: 'app-parties-list',
  templateUrl: './parties-list.component.html',
  styleUrls: ['./parties-list.component.css']
})
export class PartiesListComponent implements OnInit{

  getParties:partyModel[]=[]

  constructor(private api:UserapiService ){}
  ngOnInit(): void {
    this.allParties()
  }

  allParties(){
    this.api.getallParties().subscribe({
      next:(res:any)=>{
        this.getParties=res
        console.log(this.getParties);
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

  removeParty(id:any){
    this.api.deletePartyApi(id).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.allParties()        
      },
      error:(res:any)=>{
        console.log(res);
        
      }
    })
  }
}
