import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/users/register/register.component';
import { LoginComponent } from './components/users/login/login.component';
import { GuestUserComponent } from './guest-user.component';
import { GuestUserRoutingModule } from './guest-user-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';

@NgModule({
  declarations: [GuestUserComponent, RegisterComponent, LoginComponent, MainLayoutComponent],
  imports: [CommonModule, GuestUserRoutingModule, ReactiveFormsModule],
})
export class GuestUserModule {}
