import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.html',
  styleUrls: ['./area-chart.css'],
 })


export class AreaChart implements AfterViewInit {
  @ViewChild('AreaCanvas') private chartRef!: ElementRef<HTMLCanvasElement>;
  chart: Chart | undefined;

  ngAfterViewInit(){
    this.chartLoader();
  }

  chartLoader(){
    const ctx = this.chartRef?.nativeElement?.getContext('2d');
    if (!ctx) return;

    this.chart = new Chart(ctx,{
       type: 'line',
       data:{
         labels:['JAN','FEB','MAR','APR'],
         datasets:[
           {
             label:'apple',
             data:[128,124,126,160],
             backgroundColor: 'red',
             fill: true,
             tension: 0.4
           },
           {
             label:'orange',
              data:[349,335,256,960],
              backgroundColor: 'rgba(255,159,64,0.5)',
              fill: true,
              tension: 0.4
           },
           {
             label:'mango',
              data:[188,335,656,960],
              backgroundColor: 'rgba(255,205,86,0.5)',
              fill: true,
              tension: 0.4
           },
           {
             label:'guava',
              data:[387,635,256,760],
              backgroundColor: 'rgba(75,192,192,0.5)',
              fill: true,
              tension: 0.4
           },
         ]
       },
       options: {
         responsive: true,
         maintainAspectRatio: false,
       }
    });

  }
}
