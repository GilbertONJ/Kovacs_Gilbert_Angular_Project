import { Component } from '@angular/core';
import { ManipulationService } from 'src/app/Services/manipulation.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-all-time-series',
  templateUrl: './all-time-series.component.html',
  styleUrls: ['./all-time-series.component.css']
})
export class AllTimeSeriesComponent implements OnInit {

  constructor(private ms : ManipulationService){

  }

  ngOnInit(): void {
    this.ms.loading('allTimeSeries', 'allTimeSeries')
  }

  add(){
    this.ms.adding('allTimeSeries');
  }
}
