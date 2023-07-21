import { Component } from '@angular/core';
import { ManipulationService } from 'src/app/Services/manipulation.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-last-movies',
  templateUrl: './last-movies.component.html',
  styleUrls: ['./last-movies.component.css']
})
export class LastMoviesComponent implements OnInit{

  constructor(private ms: ManipulationService){

  }

  ngOnInit(): void {
    this.ms.loading('lastMovies', 'lastMovie');
  }
  add(){
    this.ms.adding('lastMovie');
  }
}
