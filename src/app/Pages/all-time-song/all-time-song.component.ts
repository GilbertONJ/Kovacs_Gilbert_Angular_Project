import { Component } from '@angular/core';
import { ManipulationService } from 'src/app/Services/manipulation.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-all-time-song',
  templateUrl: './all-time-song.component.html',
  styleUrls: ['./all-time-song.component.css']
})
export class AllTimeSongComponent implements OnInit{

  constructor(private ms: ManipulationService){

  }

  ngOnInit(): void {
    this.ms.loading('allTimeSongs', 'allTimeMusic');
  }

  add(){
    this.ms.adding('allTimeMusic');
  }
}
