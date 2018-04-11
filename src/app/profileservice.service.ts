import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileserviceService {
  private username:string;
  private clientid :'9dd98ed4e30db926a5ac';
  private clientsecret:'1ad40c682dc15e5db80ed41f789fd6726f1f0779';


  constructor(private http:Http) {
   console.log('servive is working');
   this.username='nitesh';
   }
   gitProfile(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id="+ this.clientid + "&client_secret="+ this.clientsecret)
     .map(res=> res.json());
   }

   gitRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id="+ this.clientid + "&client_secret="+ this.clientsecret)
     .map(res=> res.json());
   }
   updateProfile(username:string){
     this.username= username;
   }

}
