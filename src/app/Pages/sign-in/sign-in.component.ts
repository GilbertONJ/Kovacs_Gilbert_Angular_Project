import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  

  userData = new FormGroup({
    name: new FormControl('', ([Validators.required, Validators.minLength(6)])),
    password: new FormControl('', ([Validators.required, Validators.minLength(6)])),
    email: new FormControl('', ([Validators.email, Validators.required]))

  })

  constructor(private router: Router){
    
  }

  signingUp(){
    if(this.userData.valid){
      let username: string = this.userData.get('name')?.value as string;
      localStorage.setItem(username, JSON.stringify(this.userData.value))
      this.router.navigateByUrl('/log-in')
    }
  }

  logIn(){
    this.router.navigateByUrl('/log-in');
  }
}
