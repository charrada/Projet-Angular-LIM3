import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  imports: [],
  templateUrl: './loading.html',
  styleUrl: './loading.css'
})
export class Loading implements OnInit{

  constructor(private router :Router){}

ngOnInit(): void {
  setTimeout(  ()=>{

    
    this.router.navigate(["home"]);


  },3000  )
  
}

}
