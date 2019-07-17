import { Component } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {

  title = 'Pie';
  chart:any=[];
  ngOnInit(){
  this.chart=new Chart('canvas',{
    type:'pie',
  options:{
  
  responsive:true,
  title:{
    display:true,
    text:"Pie Chart"
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
  data:[45,10,5,25,15].reverse(),
    backgroundColor:["skyblue","burgundy","yellow","violet","brown"],
    label:"Dataset 1"
  }],
 labels: ["red","grey","yellow","pink","orange"]
    
  }
  })
  }
}
