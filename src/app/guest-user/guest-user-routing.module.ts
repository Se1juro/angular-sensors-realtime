import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestUserComponent } from './guest-user.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';

const routes: Routes = [
  {
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
      // otras rutas no autenticadas aquí
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class GuestUserRoutingModule {}
