import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, ReactiveFormsModule, FormsModule, FormControl, Validators } from '@angular/forms';
// import { AppRoutingModule } from '../app-routing.module';
import { CreateProfileService } from '../create-profile.service';
import {coerceNumberProperty} from '@angular/cdk/coercion';
import PopperJs from "popper.js";


export interface Month {
  month: string;
  // sound: string;
}

export interface Year {
  year: Number;
  // sound: string;
}

export interface Course {
  course: string;
  // sound: string;
}

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {

  options: FormGroup;
  createProfile: FormGroup;
  constructor(private fb: FormBuilder, private createService:CreateProfileService, private router: Router) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
   }

   initializeForm() {
    this.createProfile = this.fb.group({
      firstName: ['', [
        Validators.required
      ]],
      lastName: ['', [
        Validators.required
      ]],
      alternateEmail: ['', [
        Validators.required,
        Validators.email
      ]],
      persMobile: ['', [
        Validators.required,
        Validators.maxLength(11),
        Validators.minLength(10)
      ]],
      tempAddLine1: ['', [
        Validators.required
      ]],
      permAddLine1: ['', [
        Validators.required
      ]],
      institute: ['', [
        Validators.required
      ]],
      university: ['', [
        Validators.required
      ]],
      major: ['', [
        Validators.required
      ]],
      designation: ['', [
        Validators.required
      ]],
      organization: ['', [
        Validators.required
      ]],
      projectName:['',[
        Validators.required,
      ]],
      noticePeriod:['',[
        Validators.required
      ]],
      // location:['',[
      //   Validators.required
      // ]],
      // enquiry_for: ['', [
      //   Validators.required,
      //   // Validators.minLength(3),
      //   // Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9]{8,16}$')
      // ]],
      // message:['',[

      // ]]
    })
  }

  monthControl = new FormControl('', [Validators.required]);
  YearControl = new FormControl('', [Validators.required]);
  courseController = new FormControl('', [Validators.required]);
  selectFormControl = new FormControl('', Validators.required);
  months: Month[] = [
    {month: 'January'},
    {month: 'February'},
    {month: 'March'},
    {month: 'April'},
    {month: 'May'},
    {month: 'June'},
    {month: 'July'},
    {month: 'August'},
    {month: 'September'},
    {month: 'October'},
    {month: 'November'},
    {month: 'December'},
  ];

  years: Year[] = [
    {year: 1988},
    {year: 1989},
    {year: 1999},
    {year: 2000},
    {year: 2001},
    {year: 2002},
    {year: 2003},
    {year: 2003},
    {year: 2004},
    {year: 2005},
    {year: 2006},
    {year: 2007},
    {year: 2008},
    {year: 2009},
    {year: 2010},
    {year: 2011}, 
    {year: 2012},
    {year: 2013},
    {year: 2014},
    {year: 2015},
    {year: 2016},
    {year: 2017},
    {year: 2018},
    {year: 2019},
    {year: 2020},
    {year: 2021},
    {year: 2022},
    {year: 2023},
    {year: 2024},
    {year: 2025},
    {year: 2026},
    {year: 2027},
    {year: 2028},
  ];
  courses: Course[] = [
    {course: 'Engineering'},
    {course: 'P.U.'},
    {course: 'High School'},
  ];

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];


  saveTheNewProfile(){
    console.log("======= create profile ======= "+JSON.stringify(this.createProfile.value));
  }

  ngOnInit() {
    this.initializeForm()
  }

}
