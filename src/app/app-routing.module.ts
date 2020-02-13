import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { CreateProfileComponent } from './profile/create-profile/create-profile.component';


const routes: Routes = [
  { path: 'myProfile', component:  MyProfileComponent},
  { path: 'createProfile', component:  CreateProfileComponent},
  // { path: '',redirectTo : 'myProfile',pathMatch:'full'}
];

@NgModule({
  imports: [
    // CommonModule,,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
