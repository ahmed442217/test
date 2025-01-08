import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(private _addcart:CartService){}
  @Input ()product:Product= {} as Product
  ngOnInit(): void {
  }
  addtocart(id:string){
    this._addcart.addproductyocart(id).subscribe({
      next:(res)=>console.log(res)
    })
  }

}
