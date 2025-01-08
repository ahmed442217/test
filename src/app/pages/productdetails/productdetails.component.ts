import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  id:any
  data:any={}
  constructor(private route:ActivatedRoute , private _productsService:ProductsService){
    this.id = this.route.snapshot.paramMap.get("id")
    console.log(this.id)
  }

  ngOnInit(): void {
    this.getproductid()
  }

  getproductid(){
    this._productsService.getproductbyid(this.id).subscribe(res => {
      this.data = res
      console.log(res)
      console.log(this.data)
    })
}


}
