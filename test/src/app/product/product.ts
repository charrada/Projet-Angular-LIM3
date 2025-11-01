import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product implements OnInit {
constructor(private route:ActivatedRoute){}

productId!:number;

ngOnInit(): void {
  console.log(("saluuuut"));
  this.productId=+this.route.snapshot.paramMap.get('id')!;
}
}
