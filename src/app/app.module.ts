import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './pages/brand/brand.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { LoginComponent } from './pages/login/login.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProductsComponent } from './pages/products/products.component';
import { RegisterComponent } from './pages/register/register.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SettingComponent } from './pages/setting/setting.component';
import { WebComponent } from './pages/web/web.component';
import { MobileComponent } from './pages/mobile/mobile.component';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignoutComponent } from './pages/signout/signout.component';
import { MainsliderComponent } from './pages/home/component/mainslider/mainslider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CategorysliderComponent } from './pages/home/component/categoryslider/categoryslider.component';
import { FeatureproductsComponent } from './pages/home/component/featureproducts/featureproducts.component';
import { ProductdetailsComponent } from './pages/productdetails/productdetails.component';
import { FilterByNamePipe } from './filter-by-name.pipe';
import { CartComponent } from './pages/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    CategoriesComponent,
    LoginComponent,
    NotfoundComponent,
    OrdersComponent,
    ProductsComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SettingComponent,
    WebComponent,
    MobileComponent,
    SignoutComponent,
    MainsliderComponent,
    CategorysliderComponent,
    FeatureproductsComponent,
    ProductdetailsComponent,
    FilterByNamePipe,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
