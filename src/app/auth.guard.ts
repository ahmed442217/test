import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let roouter = inject(Router)
  if(localStorage.getItem("usertoken")){
    return true;
  }else{
    roouter.navigate(["/login"])
    return false
  }
  
};
