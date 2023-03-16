import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CongratesApplyComponent } from '../congrates-apply/congrates-apply.component';
import { CongratulationsComponent } from '../testPage/congratulations/congratulations.component';
import { QuestionsComponent } from '../testPage/questions/questions.component';
import { ApplyOpeningOtpComponent } from './apply-opening-otp/apply-opening-otp.component';
import { CareerPageComponent } from './career-page/career-page.component';
import { CareersComponent } from './careers.component';
import { EligibilityTestComponent } from './eligibility-test/eligibility-test.component';
import { InnovetorComponent } from './innovetor/innovetor.component';
import { OpeningFillDetailsComponent } from './opening-fill-details/opening-fill-details.component';
import { OpeningsComponent } from './openings/openings.component';

const routes: Routes = [
  {
    path:'career', redirectTo:'/innovetor', pathMatch:'full'
  },
  {
      path: '', component: CareersComponent,
      children: [
        {
            path: '', component: CareerPageComponent,  
            children:[
              {
                path: 'openings', component: OpeningsComponent,  
              },
              {
                path: 'test', component: EligibilityTestComponent,  
              },
              {
                path: 'innovetor', component: InnovetorComponent,  
              },
              {
                path: 'apply', component: ApplyOpeningOtpComponent,  
              },
              {
                path: 'filldetails', component: OpeningFillDetailsComponent,  
              }
            ]
        },
      ]
  },
  {
    path:'questions',
    component: QuestionsComponent
  },
  {
    path:'congratulations',
    component: CongratulationsComponent
  },
  {
    path:'congrates',
    component: CongratesApplyComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareersRoutingModule { }