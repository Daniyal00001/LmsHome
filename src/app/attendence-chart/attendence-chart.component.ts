import { Component, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexLegend,
  ApexDataLabels
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  responsive: ApexResponsive[];
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
  colors: string[]; 
  fill: { colors?: string[] }; 
};

@Component({
  selector: 'app-attendence-chart',
  templateUrl: './attendence-chart.component.html',
  styleUrls: ['./attendence-chart.component.css']
})
export class AttendanceChartComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [75, 15, 10],
      chart: {
        type: 'donut',
        width: '100%'
      },
      labels: ['Present', 'Absent', 'Leave'],
      colors: ['#1579D1', '#003972', '#78C2FF'],
      fill: {
        colors: ['#1579D1', '#003972', '#78C2FF']
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 250
            },
            legend: {
              position: 'bottom'
            }
          }
        }
      ],
      legend: {
        position: 'right',
        fontSize: '14px'
      },
      dataLabels: {
        enabled: true
      }
    };
  }
}