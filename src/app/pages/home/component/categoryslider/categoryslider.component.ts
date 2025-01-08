import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Category } from 'src/app/interface/category';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categoryslider',
  templateUrl: './categoryslider.component.html',
  styleUrls: ['./categoryslider.component.css']
})
export class CategorysliderComponent implements OnInit {
  allcategory:Category[]=[]
  constructor(private _categoriesService:CategoriesService){}
  ngOnInit(): void {
    this.getcategories()
  }
  getcategories(){
    this._categoriesService.getcategories().subscribe({
      next:(data)=>{console.log(data)
        this.allcategory=data.data

      },
      error:(err)=>{console.log(err)},
    })
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    margin:10,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      940: {
        items: 8
      }

    },
    nav: true
  }
}
