import { ProfileserviceService } from './../profileservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any[];
  repos: any[];
  username:string;
  constructor(private profileservice: ProfileserviceService) {
  
   }
   findProfile(){
     this.profileservice.updateProfile(this.username);
     this.profileservice.gitProfile().subscribe(profile=>{
      console.log(profile);
      this.profile =profile;
    });
    this.profileservice.gitRepos().subscribe(repos=>{
      console.log(repos);
      this.repos =repos;
    });
   }

  ngOnInit() {
  }

}
