import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: '', redirectTo: 'start1', pathMatch: 'full' },
  { path: 'start1', component: Start1Component },
  { path: 'start2', component: Start2Component },
  { path: 'start3', component: Start3Component },
  { path: 'start4', component: Start4Component },
  { path: 'start5', component: Start5Component },
  { path: 'start6', component: Start6Component },
  { path: 'start7', component: Start7Component },
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent },
  { path: 'weight', component: WeightComponent },
  { path: 'day', component: DayComponent },
  { path: 'week', component: WeekComponent },
  { path: 'month', component: MonthComponent },
  { path: 'exercise', component: ExerciseComponent },
  { path: 'exscroll', component: ExscrollComponent },
  { path: 'management', component: ManagementComponent },
  { path: 'mascroll', component: MascrollComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] // 이 모듈을 다른 모듈에서 사용할 수 있도록 export
})
export class AppRoutingModule { }
