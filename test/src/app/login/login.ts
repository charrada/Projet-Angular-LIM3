import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  constructor( private router:Router){}

  email1:string="";
  password:string="";

  login(){
    console.log("login")

    if(this.email1=='admin'&& this.password=="admin"){
alert("Okaay")
this.router.navigate(['loading'])
    }else{
alert('NOOOO')
    }

  }

}
