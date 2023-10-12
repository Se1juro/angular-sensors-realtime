import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SensorsComponent } from './sensors.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    SensorsComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SensorsModule { }
