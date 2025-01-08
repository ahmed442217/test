import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/cartcomp/interface/cartt';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private _cart:CartService){}
  cartDetails:Cart = {} as Cart
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
