import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isloggedin:boolean=false;
  constructor(private _auth:AuthService){
    _auth.usertoken.subscribe({
      next : ()=>{
        if(_auth.usertoken.getValue()){
          this.isloggedin=true
        }else{
        this.isloggedin=false;
      }
      }
    })
  }
  signout(){
    this._auth.signout()
  }
}
