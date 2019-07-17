import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-combo-chart',
  templateUrl: './combo-chart.component.html',
  styleUrls: ['./combo-chart.component.css']
})
export class ComboChartComponent implements OnInit {

   
title = 'barChart';
chart:any=[];
ngOnInit(){
this.chart=new Chart('canvas',{
  type:'bar',
options:{

responsive:true,
title:{
  display:true,
  text:"Combo Line and Bar Chart"
},
},
data:{
labels:['Pune','Delhi','Agra','Bangalore','Nasik','Ranchi','Noida','Hyderabad'],
datasets:[
{
type:"bar",
label:'Temperature',
  data:[40,25,56,30,40,120,80,45,33,43,56,60],
  backgroundColor:'green',
  borderColor:'green',
  fill:false,
},
{
  type:"line",
  label:'Humidity',
  data:[30,90,25,80,99,39,77,40,80,33,120,80].reverse(),
  backgroundColor:'brown',
  borderColor:'brown',
  fill:false,
},

{
  type:"bar",
  label:'Wind',
  data:[40,25,56,30,40,120,80,45,33,43,56,60].reverse(),
  backgroundColor:'pink',
  borderColor:'pink',
  fill:false,
}
]
}
})
}

}
