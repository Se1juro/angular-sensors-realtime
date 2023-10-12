import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SensorsComponent } from './sensors/sensors.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { AuthGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: SensorsComponent,
      },
      {
        path: 'sensors',
        component: SensorsComponent,
      },
      {
        path: 'home',
        component: SensorsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
