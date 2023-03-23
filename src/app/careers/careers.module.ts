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
import { AutosizeModule } from 'ngx-autosize';
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';
import { environment } from 'src/environments/environment';

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
    AutosizeModule,
    FormsModule,
    ReactiveFormsModule, 
    RecaptchaModule,
    RecaptchaFormsModule
  ],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey:'6LfKNi0cAAAAACeYwFRY9_d_qjGhpiwYUo5gNW5-',
      } as RecaptchaSettings,
    },
  ]
})
export class CareersModule { }
