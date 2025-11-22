import { Component,AfterViewInit,ViewChild,ElementRef, } from '@angular/core';
import { Chart } from 'chart.js/auto'; 

@Component({
  selector: 'app-scatter-chart',
  imports: [],
  templateUrl: './scatter-chart.html',
  styleUrl: './scatter-chart.css',
})




export class ScatterChart implements AfterViewInit {
  @ViewChild('ScatterCanvas') private chartRef!: ElementRef<HTMLCanvasElement>;
  chart: Chart | undefined;

  ngAfterViewInit(){
    this.chartLoader();
  }

  chartLoader(){
    const ctx = this.chartRef?.nativeElement?.getContext('2d');
    if (!ctx) return;

     this.chart = new Chart (ctx,{
       type:'scatter',
       data:{
         labels:['Scatter Dataset'],
         datasets:[
           {
            
          label:'First Dataset',
          data:[
            {
              x:-10,
              y:10,
            },
             {
              x:0,
              y:10,
            },
             {
              x:8,
              y:-8,
            },
             {
              x:0.5,
              y:5.5,
            },


          ],
          backgroundColor:'blue'

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

