import { Component, OnDestroy, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-time-graph',
  templateUrl: './time-graph.component.html',
  styleUrls: ['./time-graph.component.css']
})
export class TimeGraphComponent implements OnInit, OnDestroy {
  private chart: Highcharts.Chart | undefined;
  private chartInterval: any;
  button = false;


  ngOnInit() {
    // this.initializeChart();
   
  }

  ngOnDestroy() {
    clearInterval(this.chartInterval);
    if (this.chart) {
      this.chart.destroy();
    }
  }

  private initializeChart() {
    Highcharts.setOptions({
      time: {
        timezone: 'Asia/Kolkata' // Set the desired time zone
      }
    });

    const options: Highcharts.Options = {

      chart: {
        type: 'line',
        renderTo: 'chart-container',
      },
      title: {
        text: " ",
      },
      subtitle: {
        text: ' ',
      },
      xAxis: {
        type: 'datetime',
        labels: {
          format: '{value:%H:%M %p}', // Use Highcharts date format
          rotation: -45,
        },
      },
      yAxis: {
        title: {
          text: ' ',
        },
        max: 2,
        tickInterval:1,
      },
      plotOptions: {
        line: {
          animation: false,
        },
      },
      series: [
        {
          name: '',
          data: [
            { x: new Date().getTime(), y: 1 }, // Initial point 1
            { x: new Date().getTime(), y: 2 }, // Initial point 2
          ],
        } as any,
      ],
    };

    this.chart = new Highcharts.Chart(options);

    // Set the initial x-axis values with the current system time
    if (this.chart) {
      const currDate = new Date();
      const nearestFiveMinutes = Math.floor(currDate.getMinutes() / 5) * 5;
      currDate.setMinutes(nearestFiveMinutes, 0);

      for (let i = 0; i < 12; i++) {
        const intervalDate = new Date(currDate.getTime() - i * 5 * 60 * 1000);
        const dataPoint = { x: intervalDate.getTime(), y: 0 };	
        this.chart.series[0].addPoint(dataPoint);
      }
    }

    this.chartInterval = setInterval(() => {
      this.updateData();
    }, 300000); //  minute interval in milliseconds
  }

  private updateData() {
    const currDate = new Date();
    const nearestMinute = Math.floor(currDate.getMinutes()/5)* 5 * 60 * 1000;
    currDate.setMilliseconds(currDate.getMilliseconds() - currDate.getMilliseconds() % 300000);
	

    const transactions = Math.round(Math.random() * 4) + 1;

    if (this.chart) {
      // Shift the existing points to the left
      const seriesData = (this.chart.series[0].options as any).data as Highcharts.PointOptionsObject[];
      this.chart.series[0].addPoint({ x: currDate.getTime() + nearestMinute, y: transactions }, true, true);

      if (seriesData.length > 12) {
        seriesData.shift();
      }
      
    }
  }
  onClick() {
    this.button = !this.button;

    if (this.button) {
      this.initializeChart();
    } else {
      // Destroy the chart when hiding
      if (this.chart) {
        this.chart.destroy();
        this.chart = undefined;
      }
    }
  }
  
}
