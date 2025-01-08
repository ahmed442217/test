import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  registerform : FormGroup = new FormGroup ({
    name: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(10)]),
    email : new FormControl(null , Validators.required),
    password : new FormControl(null , Validators.required),
    rePassword : new FormControl(null , Validators.required),
    phone : new FormControl(null , Validators.required),
  }) 
  constructor(private _authService:AuthService ,private _router:Router){}
  isloading:boolean=false;

  register(form:FormGroup){
    if(form.valid && !this.isloading) {
      this.isloading=true
      this.markallcontrolstouched(form)
      this._authService.signup(form.value).subscribe({
        next : (data) =>{console.log(data); if(data.message=="success"){this._router.navigate(['./login'])}},
        error : (err) =>{console.log(err); this.isloading=false}
      })
    }
  }



  markallcontrolstouched(form : FormGroup){
    Object.values(form.controls).forEach((control:any)=>{
      control.markAsTouched();
      if(control.controls){
        this.markallcontrolstouched(control)
      }
    })
  }
}




