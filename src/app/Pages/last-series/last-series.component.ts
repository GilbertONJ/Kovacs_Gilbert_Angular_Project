import { Component } from '@angular/core';
import { ManipulationService } from 'src/app/Services/manipulation.service';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-last-series',
  templateUrl: './last-series.component.html',
  styleUrls: ['./last-series.component.css']
})
export class LastSeriesComponent implements OnInit {

  constructor(private mS: ManipulationService){

  }


  ngOnInit(): void {
    this.mS.loading('series-div', 'lastSeries');
  }

  add(){
    this.mS.adding('lastSeries');
  }

}
