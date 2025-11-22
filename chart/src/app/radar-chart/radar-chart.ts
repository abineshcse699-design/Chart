import { Component, AfterViewInit,ViewChild,ElementRef } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-radar-chart',
  imports: [],
  templateUrl: './radar-chart.html',
  styleUrl: './radar-chart.css',
})


// export class RadarChart {

// }


export class RadarChart implements AfterViewInit {
  @ViewChild('RaderCanvas') private chartRef!: ElementRef<HTMLCanvasElement>;
  chart: Chart | undefined;

  ngAfterViewInit(){
    this.chartLoader();
  }

  chartLoader(){
    const ctx = this.chartRef?.nativeElement?.getContext('2d');
    if (!ctx) return;

     this.chart = new Chart (ctx,{
       type:'radar',
       data:{
       labels:[
        'Eating',
        'Drinking',
        'Sleeping',
        'Coding',
        'Cycling',
        'Running'
       ],

       datasets:[
        {
        label:'jan',
        data:[78,88,76,77,23,90,78],
        backgroundColor:'red',
        fill:true,

       },

      
    {
       label:'feb',
        data:[20,90,76,77,23,90,78],
        backgroundColor:'blue',
        fill:true,

    },

       


      ],

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