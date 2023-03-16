import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareersComponent } from './careers/careers.component';

const routes: Routes = [
  {
  path:'',
  redirectTo:'',
  pathMatch:'full'
  },
  {
    path:'',
    loadChildren: () => import('./careers/careers.module').then(m => m.CareersModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
