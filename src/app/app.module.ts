import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts-x';
import { RouterModule,Routes} from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ComboChartComponent } from './combo-chart/combo-chart.component';

import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    BarChartComponent,
    ComboChartComponent,
     DoughnutChartComponent,
    PieChartComponent,
    HomeComponent,PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ChartsModule,RouterModule.forRoot([

{path:"", redirectTo:"/home",pathMatch:"full"},
{path:"home",component:HomeComponent},
{path:"line-chart",component:LineChartComponent},
{path:"bar-chart",component:BarChartComponent},
{path:"combo-chart",component:ComboChartComponent},
{path:"doughnut-chart",component:DoughnutChartComponent},
{path:"pie-chart",component:PieChartComponent},
{path:"**",component:PageNotFoundComponent}

  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
