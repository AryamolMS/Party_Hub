import { Component, OnInit } from '@angular/core';
import { partyModel } from '../parties.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserapiService } from '../services/userapi.service';

@Component({
  selector: 'app-parties-edit',
  templateUrl: './parties-edit.component.html',
  styleUrls: ['./parties-edit.component.css']
})
export class PartiesEditComponent implements OnInit{
  party:partyModel={}

  constructor(private router:ActivatedRoute, private api:UserapiService,private route:Router){}

  ngOnInit(): void {
    this.router.params.subscribe((res:any)=>{
     /*  console.log(res.id); */
      const {id} = res
      this.viewParty(id)
    })
  }

  viewParty(id:string){
    this.api.viewPartyApi(id).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.party=res
      },
      error:(err:any)=>{
        console.log(err);    
      }
    })
  }

  updateParty(id:any){
    this.api.updatePartyApi(id,this.party).subscribe({
      next:(res:any)=>{
        console.log(res);
        alert("updated successfully")
        this.route.navigateByUrl('/parties-list')
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

  cancelbutton(id:any){
    this.viewParty(id)
  }
}
