import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './interface/product';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(products:Product[] , searchkey:string): Product[] {
    return products.filter((ele)=>ele.title.toLowerCase().includes(searchkey.toLocaleLowerCase()))
  }

}
