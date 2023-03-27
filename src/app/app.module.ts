import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LevitatingService } from './common/levitating.service';
import { ApiService } from './common/api.service';
import { CareersRoutingModule } from './careers/careers-routing.modules';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CongratesApplyComponent } from './congrates-apply/congrates-apply.component';
import { AjaxService } from './common/levitating.ajaxsevice';
import { LoaderService } from './common/loader.service';
import { InterceptorService } from './common/levitating.interceptor';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { AutosizeModule } from 'ngx-autosize';
import { WhyLEComponent } from './about/why-le/why-le.component';
import { BoardComponent } from './about/board/board.component';
import { TeamComponent } from './about/team/team.component';
import { AboutRoutingModule } from './about/about-routing.module';
import { TestCongratesComponent } from './test-congrates/test-congrates.component';
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';
import { environment } from '../environments/environment';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CookiesComponent } from './cookies/cookies.component';
import { TersConditionComponent } from './ters-condition/ters-condition.component';
import { RecaptchaV3Module } from 'ng-recaptcha';
import { HashLocationStrategy,LocationStrategy} from '@angular/common'

@NgModule({
  declarations: [
    AppComponent,
    CongratesApplyComponent,
    HomeComponent,
    AboutComponent,
    JoinUsComponent,
    ThankyouComponent,
    WhyLEComponent,
    BoardComponent,
    TeamComponent,
    TestCongratesComponent,
    PrivacyPolicyComponent,
    CookiesComponent,
    TersConditionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule,
    CareersRoutingModule,
    AboutRoutingModule,
    HttpClientModule,
    AutosizeModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    RecaptchaV3Module,
  ],
  
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: '6Lf_kSolAAAAALDrg7_fT-04KxttFKKjQze1VT2o',
      } as RecaptchaSettings,
    },
    ApiService,
    LevitatingService,
    AjaxService,
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    {provide:LocationStrategy, useClass:HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
