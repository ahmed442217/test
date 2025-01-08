import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _http:HttpClient) { }
  addproductyocart(id:string) :Observable <any> {
    return this._http.post(`https://ecommerce.routemisr.com/api/v1/cart` , {productId:id}, {headers:{Token:`${localStorage.getItem("usertoken")}`}})
  }
  getcart() :Observable <any> {
    return this._http.get(`https://ecommerce.routemisr.com/api/v1/cart` ,  {headers:{Token:`${localStorage.getItem("usertoken")}`}})
  }
}
