import { Pipe, PipeTransform } from '@angular/core';

import { ProductService } from 'src/app/model/productService/product.service';
import { Product } from 'src/app/model/productService/product';

@Pipe({
  name: 'searchproduct'
})
export class SearchproductPipe implements PipeTransform {

  constructor(private productService: ProductService) { 
	}

  transform(value: any, args?: any): any {
    console.log(value);
    let p: Product[] = this.productService.searchProduct(value);
    return p;
    
  }

}
