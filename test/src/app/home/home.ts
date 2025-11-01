import { Component } from '@angular/core';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {


  user=5



  items:Item[]=[
    {id:1,name:"salut",quantity:5,available:true},
     {id:2,name:"salut2",quantity:25,available:false},
      {id:3,name:"salut3",quantity:15,available:true}
  ]

  item1(item:Item) {
console.log('Item clicked:',item)
  }

}
