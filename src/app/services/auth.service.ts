import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interface/user';
import { Login } from '../interface/login';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usertoken:BehaviorSubject<string> = new BehaviorSubject("")
  setusertoken(){
    let token = JSON.stringify(localStorage.getItem('usertoken'))
    this.usertoken.next(token)
  
  }

  constructor(private _httpclient:HttpClient , private _router:Router) { 
    if(localStorage.getItem("usertoken")){
      this.usertoken.next(JSON.stringify(localStorage.getItem("usertoken")))
    }
  }
  signup(info : User) : Observable<any>{
    return this._httpclient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,info)
  }
  signin(info : Login) : Observable<any>{
    return this._httpclient.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,info)
  }
  signout(){
    localStorage.removeItem("usertoken" )
      this.usertoken.next("")
      this._router.navigate(["/login"])
  }
}
