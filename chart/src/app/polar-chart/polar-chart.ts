import { Component,AfterViewInit,ViewChild,ElementRef } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-polar-chart',
  imports: [],
  templateUrl: './polar-chart.html',
  styleUrl: './polar-chart.css',
})

// export class PolarChart {

// }



export class PolarAreaChart implements AfterViewInit {
  @ViewChild('PolarCanvas') private chartRef!: ElementRef<HTMLCanvasElement>;
  chart: Chart | undefined;

  ngAfterViewInit(){
    this.chartLoader();
  }

  chartLoader(){
    const ctx = this.chartRef?.nativeElement?.getContext('2d');
    if (!ctx) return;

     this.chart = new Chart (ctx,{
       type:'polarArea',
       data:{
         labels:['Milk','breed','Egg','chicken'],
         datasets:[
           {
             data:[80,70,50,60],
          
        
             backgroundColor:['red','blue','green','yellow'],
           },
           
        
          
         ]
       },
       options: {
         responsive: true,
         maintainAspectRatio: false,
         animations:{
          tension:{
        duration:1000,
        easing:'easeInExpo',
        from:0.1,
        to:0,
        loop:true,
       }

         }
     
         
       },
      
    });

  }
}