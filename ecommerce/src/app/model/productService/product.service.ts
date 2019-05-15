import { Injectable } from '@angular/core';

import { Product } from './product';

import { PRODUCTS } from './products-list';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor() { }

  getProducts(): Product[]{
    return PRODUCTS;
  }

  getProduct(pid: string): Product{
    let products:Product[]= this.getProducts();
    let product:Product =
        products.find(p => {return p.pid == pid});
    return Object.assign({}, product);      // creating a copy
  }

  searchProduct(s: string): Product[]{
    
    console.log();
    let products:Product[]= this.getProducts();
    let matchproduct:Product[] = [];
    if(s==undefined || s==""){
      return matchproduct;
    }
    else{
      for(let i=0; i<products.length; i++){
        if(products[i].name.toLowerCase().includes(s.toLowerCase())){
          matchproduct.push(products[i]);
        }
      }
      return matchproduct;
    }
    
  }

  

}
