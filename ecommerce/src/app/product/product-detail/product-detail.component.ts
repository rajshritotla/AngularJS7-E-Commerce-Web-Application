import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/model/productService/product.service';
import { ActivatedRoute } from '@angular/router';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';
import { Product } from 'src/app/model/productService/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ProductService]
})
export class ProductDetailComponent implements OnInit {

  product:Product;
  sub: any;

  constructor(private route: ActivatedRoute, 
    private productService: ProductService) { }

  ngOnInit() {
    
    this.sub = this.route.params.subscribe(
      params => {
        
        let productId: string = params['pid'];
        this.product = this.productService.getProduct(productId);
      }
    );
  }


  
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
