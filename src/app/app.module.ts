import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule } from 'angular-highcharts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PiechartComponent } from './piechart/piechart.component';
import { LinechartComponent } from './linechart/linechart.component';
import { BarchartComponent } from './barchart/barchart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BarlineComponent } from './barline/barline.component';
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { NgxEchartsModule } from 'ngx-echarts';
import { PiecharttwoComponent } from './piecharttwo/piecharttwo.component';
import { SvgLineComponent } from './svg-line/svg-line.component';
import { HttpClientModule } from '@angular/common/http';
import { LiveTimeGraphComponent } from './live-time-graph/live-time-graph.component';
import { TimeGraphComponent } from './time-graph/time-graph.component';




FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme, FusionTheme);


// FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);

@NgModule({
  declarations: [
    AppComponent,
    PiechartComponent,
    LinechartComponent,
    BarchartComponent,
    SidebarComponent,
    BarlineComponent,
    PiecharttwoComponent,
    SvgLineComponent,
    LiveTimeGraphComponent,
    TimeGraphComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    NgApexchartsModule,
    FusionChartsModule,
    NgxEchartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
