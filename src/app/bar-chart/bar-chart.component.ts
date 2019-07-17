import { Component } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent  {

 
title = 'barChart';
chart:any=[];
ngOnInit(){
this.chart=new Chart('canvas',{
  type:'bar',
options:{

responsive:true,
title:{
  display:true,
  text:"Bar Chart"
},
},
data:{
labels:['Pune','Delhi','Agra','Bangalore','Nasik','Ranchi','Noida','Hyderabad'],
datasets:[
{
type:"bar",
label:'Temperature',
  data:[55,30,40,45,65,52,43,56,25],
  backgroundColor:'violet',
  borderColor:'violet',
  fill:false,
},
{
  type:"bar",
  label:'Wind',
  data:[55,30,40,45,65,20,43,56,25].reverse(),
  backgroundColor:'orange',
  borderColor:'orange',
  fill:false,
}
]
}
})
}
}