import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

    userData = new FormGroup({
      name: new FormControl('', ([Validators.required])),
      password: new FormControl('', ([Validators.required]))
    })

    constructor(private router: Router){

    }

    logIn(){
      if(this.userData.valid){
        let username: string = this.userData.get('name')?.value as string;
        let userPassword: string = this.userData.get('password')?.value as string;
        const storage: string | null = localStorage.getItem(username);
        if(storage){
          if(JSON.parse(storage).password === userPassword){
            this.router.navigateByUrl('/home');
          }
        }
      }
    }
}
