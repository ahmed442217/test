import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cartt } from './interface/cartt';

@Component({
  selector: 'app-cartcomp',
  templateUrl: './cartcomp.component.html',
  styleUrls: ['./cartcomp.component.css']
})
export class CartcompComponent implements OnInit {
  constructor(private _cart:CartService){}
  cartDetails:Cartt = {} as Cartt
  ngOnInit(): void {
    this.getcart()
  }
  getcart(){
    this._cart.getcart().subscribe({
      next:(res)=>{console.log(res);
        this.cartDetails = res;
      console.log(this.cartDetails );}
    })
}
}