import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SensorsComponent } from './sensors/sensors.component';
import { GuestUserComponent } from './guest-user/guest-user.component';
import { LoginComponent } from './guest-user/components/users/login/login.component';
import { RegisterComponent } from './guest-user/components/users/register/register.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: SensorsComponent,
      },
      {
        path: 'sensors',
        component: SensorsComponent,
      },
    ],
  },
  /*   {
    path: '',
    component: GuestUserComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
