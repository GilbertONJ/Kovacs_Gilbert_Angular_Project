import { Component } from '@angular/core';
import { ManipulationService } from 'src/app/Services/manipulation.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-last-songs',
  templateUrl: './last-songs.component.html',
  styleUrls: ['./last-songs.component.css']
})
export class LastSongsComponent implements OnInit{

  constructor(private ms: ManipulationService){

  }

  ngOnInit(): void {
    this.ms.loading('lastSongs', 'lastMusic');
  }

  add(){
    this.ms.adding('lastMusic');
  }
}
