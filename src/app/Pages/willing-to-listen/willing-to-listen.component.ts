import { Component } from '@angular/core';
import { ManipulationService } from 'src/app/Services/manipulation.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-willing-to-listen',
  templateUrl: './willing-to-listen.component.html',
  styleUrls: ['./willing-to-listen.component.css']
})
export class WillingToListenComponent implements OnInit{

  constructor(private ms: ManipulationService){

  }

  ngOnInit(): void {
    this.ms.loading('willingToListen', 'WillingToListen')
  }

  add(){
    this.ms.adding('WillingToListen');
  }
}
