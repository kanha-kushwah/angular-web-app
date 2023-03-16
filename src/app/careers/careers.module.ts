import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CareersComponent } from './careers.component';
import { CareerPageComponent } from './career-page/career-page.component';
import { RouterModule } from '@angular/router';
import { CareersRoutingModule } from './careers-routing.modules';
import { QuestionsComponent } from '../testPage/questions/questions.component';
import { CongratulationsComponent } from '../testPage/congratulations/congratulations.component';
import { ApplyOpeningOtpComponent } from './apply-opening-otp/apply-opening-otp.component';
import { OpeningFillDetailsComponent } from './opening-fill-details/opening-fill-details.component';
import { OpeningsComponent } from './openings/openings.component';
import { EligibilityTestComponent } from './eligibility-test/eligibility-test.component';
import { InnovetorComponent } from './innovetor/innovetor.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CareersComponent,
    CareerPageComponent,
    ApplyOpeningOtpComponent,
    OpeningFillDetailsComponent,
    QuestionsComponent,
    CongratulationsComponent,
    OpeningsComponent,
    EligibilityTestComponent,
    InnovetorComponent,
  ],
  imports: [
    CareersRoutingModule,
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CareersModule { }
