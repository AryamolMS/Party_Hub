import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { partyModel } from '../parties.model';

@Injectable({
  providedIn: 'root'
})
export class UserapiService {

  constructor(private http:HttpClient) { }

    server_url='https://party-server-dis8.onrender.com'

    authorization(){
     return this.http.get(`${this.server_url}/user/1`)
    }
   
    addPartyApi(party:partyModel){
      return this.http.post(`${this.server_url}/party`,party)
    }

    getallParties(){
      return this.http.get(`${this.server_url}/party`)
    }

    deletePartyApi(id:any){
      return this.http.delete(`${this.server_url}/party/${id}`)
    }

    viewPartyApi(id:any){
      return this.http.get(`${this.server_url}/party/${id}`)
    }

    updatePartyApi(id:any,party:any){
      return this.http.put(`${this.server_url}/party/${id}`,party)
    }
}
