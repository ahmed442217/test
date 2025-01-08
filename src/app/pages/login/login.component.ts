import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  loginform : FormGroup = new FormGroup ({
    email : new FormControl(null , Validators.required),
    password : new FormControl(null , Validators.required),
  }) 
  constructor(private _authService:AuthService ,private _router:Router){}
  isloading:boolean=false;

  login(form: FormGroup) {
    if (form.valid && !this.isloading) {
      this.isloading = true;
      this.markallcontrolstouched(form);

      const email = form.value.email;
      const password = form.value.password;

      // التحقق من اسم المستخدم وكلمة المرور
      if (email === 'ahmed' && password === '123456') {
        // حفظ بيانات المستخدم إذا لزم الأمر
        localStorage.setItem('usertoken', 'dummyToken');

        // التوجيه إلى صفحة home
        this._router.navigate(['/home']);
      } else {
        alert('Invalid username or password');
      }

      this.isloading = false;
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
