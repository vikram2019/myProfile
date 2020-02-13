import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class MyProfileServiceService {

  constructor(private http:HttpClient, private newhttp : Http, private router : Router) { }

  getProfile(){
    // .pipe(map(data => {})).subscribe(result => {
    //   console.log(result);
    // });
    return this.newhttp.get('profile/getAllProfile')
    // .pipe(
    //   map((res: Response) => {
    //     let data = res.json()
    //     console.log('=======data1 ======== '+data.success);
    //   })
    // )
    .map((profile)=>{
      if(profile){
        let savedProfile = profile.json();
        console.log('----------- newUser -========= '+JSON.stringify(savedProfile));
        let profileData = savedProfile.allProfile
        if(savedProfile.success){
          return profileData;
        }
      }
    })
  }

  saveProfile(){

  }

  getSelectedProfile(){

  }

  updateProfile(){

  }

  deleteUpdate(){

  }
}
