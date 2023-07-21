import { Component } from '@angular/core';
import { ManipulationService } from 'src/app/Services/manipulation.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-willing-to-watch-series',
  templateUrl: './willing-to-watch-series.component.html',
  styleUrls: ['./willing-to-watch-series.component.css']
})
export class WillingToWatchSeriesComponent implements OnInit{

  constructor(private ms: ManipulationService){

  }

  ngOnInit(): void {
    this.ms.loading('willingToWatchSeries', 'willingToWatchSeries');
  }

  add(){
    this.ms.adding('willingToWatchSeries');
  }
}
