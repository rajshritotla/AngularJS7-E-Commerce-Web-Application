import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/model/productService/product.service';
import { Product } from 'src/app/model/productService/product';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ProductService]
})
export class HeaderComponent implements OnInit {
  
  products: Product[];
 

  constructor(private productService: ProductService) { 
    this.products = this.productService.getProducts();
  }

  cleardiv():void{
  
  }

  ngOnInit() {
  
  }

}
