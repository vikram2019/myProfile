import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
          MatButtonModule, 
          MatToolbarModule,
          MatSliderModule,
          MatRadioModule,
          MatFormFieldModule,
          MatCheckboxModule,
          MatInputModule,
          MatIconModule,
          MatCardModule,
          MatSelectModule,
          MatTabsModule,
          MatDatepickerModule,
          MatNativeDateModule,
          MatDialogModule
        } from '@angular/material';
import {MatMenuModule} from '@angular/material/menu'


const MaterialComponent = [
  MatButtonModule,
  MatToolbarModule,
  MatMenuModule,
  MatSliderModule,
  MatRadioModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatSelectModule,
  MatTabsModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDialogModule
]


@NgModule({
  declarations: [],
  imports: [ MaterialComponent, CommonModule ],
  exports: [ MaterialComponent ]
})
export class MaterialModule { }
