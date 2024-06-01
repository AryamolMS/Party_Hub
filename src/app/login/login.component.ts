import { Component } from '@angular/core';
import { UserapiService } from '../services/userapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username:string=""
 password:string=""  

 constructor(private api:UserapiService , private router:Router){}
 
 login(){
  if (!this.username || !this.password) {
    alert('Please fill this form')
  } else {
    this.api.authorization().subscribe({
      next:(res:any)=>{
        const {name,password} = res
        if(name == this.username && password == this.password){
          alert("Login successfull")
        }
        this.router.navigateByUrl('parties-list')
      },
      error:(res:any)=>{
        alert("Invalid username or password")
      }
    })
  }
 }
}
