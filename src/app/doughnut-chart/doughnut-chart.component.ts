import { Component } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent  {
 
  title = 'barChart';
  chart:any=[];
  ngOnInit(){
  this.chart=new Chart('canvas',{
    type:'doughnut',
  options:{
  
  responsive:true,
  title:{
    display:true,
    text:"Doughnut Chart"
  },
  legend:{
 position:"top",
  },
  animation:{
animateScale:true,
animateRotate:true
 }
  },
  data:{
  datasets:[
  {
  data:[45,10,5,25,15],
    backgroundColor:["red","green","yellow","pink","orange"],
    label:"Dataset 1"
  }],
 labels: ["red","grey","yellow","pink","orange"]
    
  }
  })
  }
  }