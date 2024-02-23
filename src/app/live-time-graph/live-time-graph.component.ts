import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HighchartsExporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-live-time-graph',
  templateUrl: './live-time-graph.component.html',
  styleUrls: ['./live-time-graph.component.css']
})
export class LiveTimeGraphComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    Highcharts.setOptions({
      global: {
        useUTC: false,
      },
    });

    const chartOptions: Highcharts.Options = {
      chart: {
        type: 'column',
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
        events: {
          load: function () {
            // set up the updating of the chart each second
            const series = this.series[0];
            setInterval(function () {
              const y = Math.random();
              series.setData([y, y * 2, y + 1, y / 2]);
            }, 1000);
          },
        },
      },
      title: {
        text: 'Live random data',
      },
      xAxis: {
        type: 'datetime',
        tickPixelInterval: 150,
      },
      yAxis: {
        title: {
          text: 'Value',
        },
        plotLines: [
          {
            value: 0,
            width: 1,
            color: '#808080',
          },
        ],
      },
      tooltip: {
        formatter: function () {
          return (
            '<b>' +
            (this.series ? (this.series as any).name : '') +
            '</b><br/>' +
            Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) +
            '<br/>' +
            Highcharts.numberFormat(this.y, 2)
          );
        },
      },
      legend: {
        enabled: false,
      },
      exporting: {
        enabled: false,
      },
      series: [
        {
          name: 'Random data',
          data: [0, 0, 0, 0],
        }as any
      ],
    };

    Highcharts.chart('container', chartOptions);
  }
}
