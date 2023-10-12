import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/users/register/register.component';
import { LoginComponent } from './components/users/login/login.component';
import { GuestUserComponent } from './guest-user.component';
import { GuestUserRoutingModule } from './guest-user-routing.module';

@NgModule({
  declarations: [GuestUserComponent, RegisterComponent, LoginComponent],
  imports: [CommonModule, GuestUserRoutingModule],
})
export class GuestUserModule {}
