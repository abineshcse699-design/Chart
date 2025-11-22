import { NgStyle } from '@angular/common';
import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';
import { color } from 'chart.js/helpers';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.html',
  styleUrls: ['./line-chart.css'],

})

// export class LineChart {

// }


export class LineChart implements AfterViewInit {
  @ViewChild('LineCanvas') private chartRef!: ElementRef<HTMLCanvasElement>;
  chart: Chart | undefined;

  ngAfterViewInit(){
    this.chartLoader();
  }

  chartLoader(){
    const ctx = this.chartRef?.nativeElement?.getContext('2d');
    if (!ctx) return;

     this.chart = new Chart (ctx,{
       type:'line',
       data:{
         labels:['JAN','FEB','MAR','APR'],
         datasets:[
           {
             label:'Iphone',
             data:[345,235,256,760],
             backgroundColor:'red'
           },
           {
             label:'samsumg',
             data:[789,335,256,760],
             backgroundColor: 'green'
           },
           {
             label:'Vivo',
             data:[298,335,256,760],
             backgroundColor: 'rgba(255,205,86,0.5)',
             
           },
           {
             label:'Googlep pixel',
             data:[387,635,256,760],
             backgroundColor: 'rgba(75,192,192,0.5)'
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

