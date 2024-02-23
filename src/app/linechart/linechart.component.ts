import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent {
  title = 'Angchart';

  lineChart=new Chart({
    chart:{
      type:'line'
    },
    title:{
      text: 'Patients'
    },
    credits:{
      enabled:false
    },
    series:[
      {
        name:'Patients admitted',
        data:[10,2,3,6,9,17,25,10,5,2,16]
      }as any,
      {
        name:'Create',
        data:[3,6,7,6,9,13,25,10,5,2,19]
      }as any
    ]
  })

}
