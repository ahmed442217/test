import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { BrandComponent } from './pages/brand/brand.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { SettingComponent } from './pages/setting/setting.component';
import { WebComponent } from './pages/web/web.component';
import { MobileComponent } from './pages/mobile/mobile.component';
import { authGuard } from './auth.guard';
import { ProductdetailsComponent } from './pages/productdetails/productdetails.component';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: "login" , pathMatch:"full"  },
  { path: 'home',canActivate:[authGuard], component: HomeComponent },
  {path:'products' ,canActivate:[authGuard],component:ProductsComponent},
  {path:'brand' ,canActivate:[authGuard],component:BrandComponent},
  {path:'categories' ,canActivate:[authGuard],component:CategoriesComponent},
  {path:'cart' ,canActivate:[authGuard],component:CartComponent},
  {path:'order' ,canActivate:[authGuard],component:OrdersComponent},
  {path:'productdetails/:id' ,canActivate:[authGuard],component:ProductdetailsComponent},
  //{path: 'cartcomp',
    //loadChildren: () => import('./cartcomp/cartcomp.module').then(m => m.CartcompModule)},
  {path:'login' ,component:LoginComponent},
  {path:'register' ,component:RegisterComponent},
  {path:'setting' ,component:SettingComponent , children: [
    {path:'web' , component:WebComponent},
    {path:'mobile' , component:MobileComponent}

  ]},
  {path:'**' ,component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
