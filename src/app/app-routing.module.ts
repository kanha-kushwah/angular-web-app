import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CareersComponent } from './careers/careers.component';
import { CookiesComponent } from './cookies/cookies.component';
import { HomeComponent } from './home/home.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TersConditionComponent } from './ters-condition/ters-condition.component';
import { TestCongratesComponent } from './test-congrates/test-congrates.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

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
    // component: AboutComponent
    loadChildren: () => import('./about/about.module').then(m=> m.AboutModule)
  },
  {
    path:'joinus',
    component: JoinUsComponent
  },
  {
    path:'thankyou',
    component: ThankyouComponent
  },
  {
    path:'testCongrates',
    component: TestCongratesComponent
  },
  {
    path:'privacy',
    component: PrivacyPolicyComponent
    
  },
  {
    path:'terms',
    component: TersConditionComponent
  },
  {
    path:'cookies',
    component: CookiesComponent
  },
];
const routerOptions : ExtraOptions ={
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled'
}

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
