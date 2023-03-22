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
  ],
  providers: [
    ApiService,
    LevitatingService,
    AjaxService,
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
