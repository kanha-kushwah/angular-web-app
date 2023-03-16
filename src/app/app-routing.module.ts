import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CareersComponent } from './careers/careers.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
  path:'',
  redirectTo:'/home',
  pathMatch:'full'
  },
  {
    path:'',
    loadChildren: () => import('./careers/careers.module').then(m => m.CareersModule)
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
