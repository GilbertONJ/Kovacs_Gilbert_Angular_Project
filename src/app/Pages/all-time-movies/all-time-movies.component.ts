import { Component } from '@angular/core';
import { ManipulationService } from 'src/app/Services/manipulation.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-all-time-movies',
  templateUrl: './all-time-movies.component.html',
  styleUrls: ['./all-time-movies.component.css']
})
export class AllTimeMoviesComponent implements OnInit {
  constructor(private ms: ManipulationService){

    
  }

  ngOnInit(): void {
    this.ms.loading('allTimeMovies', 'allTimeMovie');
  }

  add(){
    this.ms.adding('allTimeMovie');
  }
}
