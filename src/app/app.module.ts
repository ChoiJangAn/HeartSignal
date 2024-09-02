import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes'; // 수정: AppRoutingModule 임포트

// 컴포넌트 임포트
import { Start1Component } from './start1/start1.component';
import { Start2Component } from './start2/start2.component';
import { Start3Component } from './start3/start3.component';
import { Start4Component } from './start4/start4.component';
import { Start5Component } from './start5/start5.component';
import { Start6Component } from './start6/start6.component';
import { Start7Component } from './start7/start7.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { WeightComponent } from './weight/weight.component';
import { DayComponent } from './day/day.component';
import { WeekComponent } from './week/week.component';
import { MonthComponent } from './month/month.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { ExscrollComponent } from './exscroll/exscroll.component';
import { ManagementComponent } from './management/management.component';
import { MascrollComponent } from './mascroll/mascroll.component';

@NgModule({
  declarations: [
    Start1Component,
    Start2Component,
    Start3Component,
    Start4Component,
    Start5Component,
    Start6Component,
    Start7Component,
    LoginComponent,
    MainComponent,
    WeightComponent,
    DayComponent,
    WeekComponent,
    MonthComponent,
    ExerciseComponent,
    ExscrollComponent,
    ManagementComponent,
    MascrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // 수정: AppRoutingModule을 imports에 추가
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
