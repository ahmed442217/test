import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor (private _http:HttpClient ) { }
  allproduct() :Observable<any>{
    return this._http.get(`https://ecommerce.routemisr.com/api/v1/products`)
  }
  getproductbyid(id:any) :Observable<any>{
    return this._http.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
  }

}
