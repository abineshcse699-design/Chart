import { Component ,AfterViewInit,ViewChild ,ElementRef} from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-bubble-chart',
  imports: [],
  templateUrl: './bubble-chart.html',
  styleUrl: './bubble-chart.css',
})

// export class BubbleChart {

// }


export class BubbleChart implements AfterViewInit {
  @ViewChild('BubbleCanvas') private chartRef!: ElementRef<HTMLCanvasElement>;
  chart: Chart | undefined;

  ngAfterViewInit(){
    this.chartLoader();
  }

  chartLoader(){
    const ctx = this.chartRef?.nativeElement?.getContext('2d');
    if (!ctx) return;

     this.chart = new Chart (ctx,{
       type:'bubble',
       data:{
         labels:['First Datatset','Second Dataset','Third Dataset'],
         datasets:[
           {
            
          label:'First Dataset',
          data:[
            {
              x:30,
              y:10,
              r:20,
            },


          ],
          backgroundColor:'red'

           },
           {
            label:'Second Dataset',
            data:[
              {
                x:35,
                y:15,
                r:10
              }
            ],
            backgroundColor:'blue',
           },

              {
            
          label:'Third Dataset',
          data:[
            {
              x:40,
              y:15,
              r:30,
            },
            
            

          ],
          backgroundColor:'green',


           }

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

