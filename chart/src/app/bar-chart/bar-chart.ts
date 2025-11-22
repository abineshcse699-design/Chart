import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.html',
  styleUrls: ['./bar-chart.css'],
})
export class BarChart implements AfterViewInit {
  @ViewChild('barCanvas') private chartRef!: ElementRef<HTMLCanvasElement>;
  chart: Chart | undefined;

  ngAfterViewInit(){
    this.chartLoader();
  }

  chartLoader(){
    const ctx = this.chartRef?.nativeElement?.getContext('2d');
    if (!ctx) return;

    this.chart = new Chart(ctx,{
       type:'bar',
       data:{
         labels:['JAN','FEB','MAR','APR'],
         datasets:[
           {
             label:'apple',
             data:[348,335,256,760],
             backgroundColor: 'rgba(255,99,132,0.5)'
           },
           {
             label:'orange',
             data:[349,335,256,760],
             backgroundColor: 'rgba(255,159,64,0.5)'
           },
           {
             label:'mango',
             data:[288,335,256,760],
             backgroundColor: 'rgba(255,205,86,0.5)'
           },
           {
             label:'guava',
             data:[387,635,256,760],
             backgroundColor: 'rgba(75,192,192,0.5)'
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
