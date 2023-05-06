import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isNullOrWhiteSpace } from '../shared/shared-helper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username : string ;
  constructor(private route : Router){

  }
  ngOnInit(): void {
    this.username = 'deepakporwal';
  }

  onLogin(){
    this.route.navigate(['home']);
  }

  validateform(val){
    if(isNullOrWhiteSpace(val)){
      return false;
    }
    return true;
  }

  testFunc(){
    
  }
}
