import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarChart } from './bar-chart/bar-chart';
import { LineChart } from "./line-chart/line-chart";
import { AreaChart } from './area-chart/area-chart';
import { BubbleChart } from './bubble-chart/bubble-chart';
import { doughnut } from './doughnut-chart/doughnut-chart';
import { PolarAreaChart } from "./polar-chart/polar-chart";
import { RadarChart } from "./radar-chart/radar-chart";
import { ScatterChart } from "./scatter-chart/scatter-chart";
// import { LineChart_1 as LineChart } from "./bubble-chart/bubble-chart";
// import { AreaChart, BarChart_1 as BarChart } from './area-chart/area-chart';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BarChart, LineChart, AreaChart, BubbleChart, doughnut, PolarAreaChart, RadarChart,ScatterChart],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('chart');
}
