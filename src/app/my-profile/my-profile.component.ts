import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { AppRoutingModule } from '../app-routing.module';
import { MyProfileServiceService } from '../my-profile-service.service';
import {coerceNumberProperty} from '@angular/cdk/coercion';


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  myprofile : any
  name : String
  firstName : String
  middleName : String
  lastName : String
  profileObjective : String
  profileSkills : String
  profileEducation : String
  address : Object
  email : String
  alternateEmail : String
  phone : Object
  date : Number
  month : String
  year : Number
  mobile : Number
  alternateNumber : Number
  dateOfBirth : Object
  heading : String
  professionalSummary : String
  projects : any
  achivement : String
  employer : String
  strength : String
  declairation : String
  place : String
  adressLine1 : String
  adressLine2 : String
  adressCity : String
  adressState : String
  adressPincode : Number
  post : String
  fbLink : String
  linkDinLink : String
  gitLink : String
  bitBucketLink : String
  fbLinkShow : Boolean

  constructor(private formBuilderInstance : FormBuilder, private profileService : MyProfileServiceService, private router: Router) { }

  
  java = 50;
  mean = 80;
  angular = 60;
  node = 80;
  express = 60;
  mongo = 80;
  javascript = 80;
  checked = true;
  // seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  
  ngOnInit() {
    this.profileService.getProfile().subscribe((getProfile)=>{
      console.log('=============get profile in component ======= '+JSON.stringify(getProfile));
      this.myprofile = getProfile[0];
      this.name = this.myprofile.name;
      this.post = this.myprofile.post;
      this.firstName = this.myprofile.firstName;
      this.middleName = this.myprofile.middleName;
      this.lastName = this.myprofile.lastName;
      this.adressLine1 = this.myprofile.address.permanent.adressLine1;
      this.adressLine2 = this.myprofile.address.permanent.adressLine2;
      this.adressCity = this.myprofile.address.permanent.city;
      this.adressState = this.myprofile.address.permanent.state;
      this.adressPincode = this.myprofile.address.permanent.pincode;
      // this.address = this.myprofile.address.permanent.adressLine1+", "+this.myprofile.address.permanent.city+", "+this.myprofile.address.permanent.state+", "+this.myprofile.address.permanent.pincode;
      this.profileObjective = this.myprofile.profileObjective;
      this.professionalSummary = this.myprofile.professionalSummary;
      this.strength = this.myprofile.strength;
      this.achivement = this.myprofile.achivement;
      this.employer = this.myprofile.employer;
      this.declairation = this.myprofile.declairation;
      this.heading = this.myprofile.heading;
      this.email = this.myprofile.email;
      this.alternateEmail = this.myprofile.alternateEmail;
      this.dateOfBirth = this.myprofile.dateOfBirth.date+' / '+this.myprofile.dateOfBirth.month+' / '+this.myprofile.dateOfBirth.year;
      this.mobile = this.myprofile.phone.Mobile;
      this.alternateNumber = this.myprofile.phone.alternateNumber;
      this.fbLink = this.myprofile.fbLink;
      this.linkDinLink = this.myprofile.linkDinLink;
      this.gitLink = this.myprofile.gitLink;
      this.bitBucketLink = this.myprofile.bitBucketLink;
      
      if(typeof(this.fbLink) == "undefined"){
        console.log('------ inside the condition 111111111-------- '+this.fbLink);
        this.fbLinkShow = false;
      }
      
      console.log('------ this.gitLink -------- '+this.gitLink);
      console.log('------ this.fbLink -------- '+this.fbLink);
      console.log('------ this.typeof -------- '+typeof(this.fbLink));
    })
  }

}
