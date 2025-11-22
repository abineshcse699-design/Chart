import { Component,AfterViewInit,ElementRef,ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';


@Component({
  selector: 'app-doughnut-chart',
  imports: [],
  templateUrl: './doughnut-chart.html',
  styleUrl: './doughnut-chart.css',
})
// export class DoughnutChart {

// }




export class doughnut implements AfterViewInit {
  @ViewChild('DoughnutCanvas') private chartRef!: ElementRef<HTMLCanvasElement>;
  chart: Chart | undefined;

  ngAfterViewInit(){
    this.chartLoader();
  }

  chartLoader(){
    const ctx = this.chartRef?.nativeElement?.getContext('2d');
    if (!ctx) return;

     this.chart = new Chart (ctx,{
       type:'doughnut',
       data:{
         labels:['Car','Bike','Train'],
         datasets:[
           {
            
          label:'First Dataset',
          data:[ 500,300,200],
          backgroundColor:['red','blue','green'],
          borderColor:['white','black','yellow']

           },
        //     {
            
        //   label:'Second Dataset',
        //   data:[ 300,400,200],
        //   backgroundColor:['blue','green','pink'],
        //   borderColor:['white','black','yellow']


        // },
         {
            
          label:'Third Dataset',
          data:[ 600,500,400],
          backgroundColor:['red','blue','green'],
          borderColor:['white','black','yellow'],
          hoverOffset:30,

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

