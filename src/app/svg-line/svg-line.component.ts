import { Component, OnInit, OnDestroy } from '@angular/core';
import * as d3 from 'd3';
import { Lines, Marker } from './svg-line-model';
import { MarkerService } from '../svg-line-service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-svg-line',
  templateUrl: './svg-line.component.html',
  styleUrls: ['./svg-line.component.css'],
})
export class SvgLineComponent implements OnInit {
  markers: Marker[] = [];
  Lines: Lines = { lines: [] };
  markerClick: any;
  private chart: Highcharts.Chart | undefined;
  private chartInterval: any;
  button = false;
  value: any;
  
  constructor(private markerService: MarkerService) {}

  ngOnDestroy() {
    clearInterval(this.chartInterval);
    if (this.chart) {
      this.chart.destroy();
    }
  }

  ngOnInit(): void {
    this.createD3Svg();
    this.markerService.getMarkers().subscribe((res) => {
      this.markers = res.markers;
      this.Lines.lines = res.lines;
      console.log('marker------->', this.markers);
      console.log('lines------>', this.Lines);
      this.createD3Svg();
    });
  }
  generateLinePath(line: { lat: number; lng: number }[]): string {
    let pathData = `M${line[0].lat} ${line[0].lng} L${line[1].lat} ${line[1].lng}`;
    return pathData;
  }
  slicedValue1: any;
  slicedValue: any;
  marker: any;
  
  createD3Svg(): void {
    const svg = d3
      .select('div')
      .append('svg')
      .attr('width', 10000)
      .attr('height', 1000)
      .attr('overflow', 'visible');

    svg
      .selectAll('text')
      .data(this.markers)
      .enter()
      .append('text')
      .attr('x', (marker: { markerPoint: any[] }) => marker.markerPoint[0] + 5)
      .attr('y', (marker: { markerPoint: any[] }) => marker.markerPoint[1] - 5)
      .text((marker: { markerName: string }) => marker.markerName)
      .attr('font-size', '11px')
      .attr('fill', 'black')
      .style('font-weight', 700);

    svg
      .selectAll('path')
      .data(this.Lines.lines)
      .enter()
      .append('path')
      .attr('d', (lineSet: { lat: number; lng: number }[]) =>
        this.generateLinePath(lineSet)
      )
      .attr('stroke-width', 5)
      .attr('stroke', 'black')
      .attr('fill', 'none');

    svg
      .selectAll('circle')
      .data(this.markers)
      .enter()
      .append('circle')
      .attr('cx', (marker: { markerPoint: any[] }) => marker.markerPoint[0])
      .attr('cy', (marker: { markerPoint: any[] }) => marker.markerPoint[1])
      .attr('r', 5)
      .attr('fill', 'red')
      .on('click', (event, marker) => {

        this.getMarkers();

    this.button = !this.button;

    if (this.button) {
      this.initializeChart();
    } else {
      // Close the chart
      if(this.slicedValue1 == marker.markerName){
        // this.chart.destroy();
        // if (this.chart) {
        //   this.chart.destroy();
        //   // this.chart = undefined;
        // }
      
      if (this.chart) {
        this.chart.destroy();
        this.chart = undefined;
      }
    }
    }
        this.marker = marker;
        if (this.marker.markerType == 'timetableLoc') {
          console.log('Circle clicked:', this.marker);
          console.log('Circle clicked1:', marker.markerName.slice(0, 3));
          
          this.slicedValue1 = marker.markerName;
          this.slicedValue = marker.markerName.slice(0, 3);
          // this.button = !this.button;
          
          // this.onClick();

          
    console.log('this.slicedValue', this.slicedValue);

        }
      });
  }
  private initializeChart() {
    // Set the current time
    const currentTimestamp = new Date().getTime();

    const xAxisPoints = [];
    const startTime = currentTimestamp - 5 * 60 * 1000 * 11; // Start from 11 intervals (last 55 minutes)

    for (let i = 0; i < 12; i++) {
      const timestamp = startTime + i * 5 * 60 * 1000; // Add 5 minutes in milliseconds
      xAxisPoints.push(timestamp);
    }
    Highcharts.setOptions({
      time: {
        timezone: 'Asia/Kolkata' // Set the desired time zone
      }
    });

    const options: Highcharts.Options = {
      chart: {
        type: 'column',
        width: 1490,
        height: 125,
        backgroundColor: 'lightyellow', 
        plotBackgroundColor: 'lightgreen',
        
      },
      title: {
        text: '',
        
      },
      xAxis: {
        
        type: 'datetime', // Set the X-axis type to datetime
        labels: {
          
          formatter: function (
            this: Highcharts.AxisLabelsFormatterContextObject
          ) {
            const adjustedValue = typeof this.value === 'number' ? this.value + (24 * 60 * 60 * 1000) : NaN;
            const formattedTime = Highcharts.dateFormat('%H:%M %p', adjustedValue);
            return formattedTime;

          },
          style: {
            fontSize: '10px', // Adjust the font size as needed
          },
        },
        min: xAxisPoints[0], // Set the minimum timestamp
        max: xAxisPoints[xAxisPoints.length - 1], // Set the maximum timestamp
        dateTimeLabelFormats: {
          hour: '%H:%M:%S', // Customize the hour format as needed
        },
        timezone: 'Asia/Kolkata', // Set the timezone to Indian Standard Time (IST)
      } as any,
      yAxis: [
        
        {
          
          title: {
            text: `${this.graphMarker}`,
          

          },
          height: '50%', // Set the height of the first Y-axis
          lineWidth: 1,
        },
        {
          
          title: {
            text: `${this.graphMarker}`,
          },
          top: '50%', // Position the second Y-axis below the first one
          height: '50%', // Set the height of the second Y-axis
          offset: 0, // Offset to make room for the first Y-axis
          lineWidth: 2,
        },
      ],
      legend: {
        enabled: false, // Set to false to hide the legend
      },
      series: [
        {
          type: 'column',
          name: 'Column Series 1',
          data: [[currentTimestamp, 5]], // Single data point for the top axis
          yAxis: 0, // Assign to the first Y-axis
        },
        {
          type: 'column',
          name: 'Column Series 2',
          data: [[currentTimestamp, 10]], // Single data point for the bottom axis
          yAxis: 1, // Assign to the second Y-axis
          color: 'orange',
        },
      ],
        
    };

    
    this.chart = Highcharts.chart('combined-chart', options);

  }

  // onClick() {
  //   this.getMarkers();

  //   this.button = !this.button;

  //   if (this.button) {
  //     this.initializeChart();
  //   } else {
  //     // Close the chart
  //     if(this.slicedValue1 == this.marker.markerName){
  //       // this.chart.destroy();
  //       // if (this.chart) {
  //       //   this.chart.destroy();
  //       //   // this.chart = undefined;
  //       // }
      
  //     if (this.chart) {
  //       this.chart.destroy();
  //       this.chart = undefined;
  //     }
  //   }
  //   }
  //   console.log('this.slicedValue', this.slicedValue);
  
  //   // Toggle the button state
  //   // this.button = !this.button;
  //   // console.log('this.slicedValue', this.slicedValue);
  // }
  
  graphMarker: any[] = [];
  forSlice: any[] = [];
  getMarkers() {
    this.forSlice = this.markers.map((marker) => marker);

    console.log('getmarker>>>>>>>>>', this.forSlice);
    this.graphMarker = [];
    for (
      let i = 0;
      i < this.markers.map((marker) => marker.markerName).length;
      i++
    ) {
      if (
        this.markers.map((marker) => marker.markerName)[i].slice(0, 3) ==
        this.slicedValue
      ) {
        if (
          this.markers.map((marker) => marker.markerType)[i] == 'timetableLoc'
        ) {
          this.graphMarker.push(
            this.markers.map((marker) => marker.markerName)[i]
          );
        }
      }
    }
    console.log('finalgraph', this.graphMarker);
  }
}
