import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LowerCasePipe } from '@angular/common';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  chart:any;
  constructor(public router: Router){}
 
 
  onNameKeyUp(event: any) {
    this.chart = event.target.value;
    console.log(this.chart);

}

 search(){
 if(this.chart =="line chart"){
  this.router.navigate(['line-chart']);
  }
  else if(this.chart =="bar chart" )
  {
 this.router.navigate(['bar-chart']);
  }
else if(this.chart=="combo chart")
{
  this.router.navigate(['combo-chart']);
}
else if(this.chart=="doughnut chart")
{
  this.router.navigate(['doughnut-chart']);
}

else if(this.chart=="pie chart")
{
  this.router.navigate(['pie-chart']);
}
else
{
  this.router.navigate(['page-not-found']);
}

}

}
