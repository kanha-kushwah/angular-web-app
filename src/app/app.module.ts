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

@NgModule({
  declarations: [
    AppComponent,
    CongratesApplyComponent,
    HomeComponent,
    AboutComponent,
    JoinUsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule,
    CareersRoutingModule,
    HttpClientModule,
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
