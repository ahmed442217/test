import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-featureproducts',
  templateUrl: './featureproducts.component.html',
  styleUrls: ['./featureproducts.component.css']
})
export class FeatureproductsComponent implements OnInit   {
  products:Product[]=[]
  searchkey:string = '';  // تعريف searchText كمتغير عضوي
  constructor(private _productsService:ProductsService){}
  ngOnInit(): void {
    this.allproducts()
  }
  allproducts(){
    this._productsService.allproduct().subscribe({
      next:(data)=>{console.log(data );
        this.products = data.data;
      },
      error:(err)=>{console.log(err)},
      
    })
  }



}
