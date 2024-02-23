import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PiechartComponent } from './piechart/piechart.component';
import { LinechartComponent } from './linechart/linechart.component';
import { BarchartComponent } from './barchart/barchart.component';
import { BarlineComponent } from './barline/barline.component';
import { PiecharttwoComponent } from './piecharttwo/piecharttwo.component';
import { SvgLineComponent } from './svg-line/svg-line.component';
import { LiveTimeGraphComponent } from './live-time-graph/live-time-graph.component';
import { TimeGraphComponent } from './time-graph/time-graph.component';


const routes: Routes = [
  {path: 'pieChart', component: PiechartComponent },
  {path: 'lineChart', component: LinechartComponent},
  {path: 'barChart', component: BarchartComponent},
  {path: 'barLine', component: BarlineComponent},
  {path: 'pieChart2', component: PiecharttwoComponent},
  {path: 'svg-Line', component: SvgLineComponent},
  {path: 'live-time-graph', component: LiveTimeGraphComponent},
  {path: 'time-graph', component: TimeGraphComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
