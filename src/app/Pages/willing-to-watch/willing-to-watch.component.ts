import { Component } from '@angular/core';
import { ManipulationService } from 'src/app/Services/manipulation.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-willing-to-watch',
  templateUrl: './willing-to-watch.component.html',
  styleUrls: ['./willing-to-watch.component.css']
})
export class WillingToWatchComponent implements OnInit{

  constructor(private ms: ManipulationService){

  }

  ngOnInit(): void {
    this.ms.loading('willingToWatch', 'willingToWatch')
  }

  add(){
    this.ms.adding('willingToWatch');
  }
}
