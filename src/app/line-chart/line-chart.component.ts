import { Component } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent  {


  chart:any=[];
  ngOnInit(){
  this.chart=new Chart('canvas',{
    type:'line',
    data:{
labels:['Pune','Delhi','Agra','Bangalore','Nasik','Ranchi','Noida','Hyderabad'],
datasets:[
{
  label:'Temperature',
    data:[25,30,40,45,33,43,56,60],
    backgroundColor:'red',
    borderColor:'red',
    fill:false,
  },
  {
    label:'Wind',
    data:[25,30,40,45,33,43,56,60].reverse(),
    backgroundColor:'blue',
    borderColor:'blue',
    fill:false,
 }
]
  }
})

 }

}
