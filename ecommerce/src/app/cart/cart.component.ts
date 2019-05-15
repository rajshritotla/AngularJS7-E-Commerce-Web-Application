import { Component, OnInit } from '@angular/core';
import { ProductService } from '../model/productService/product.service';
import { Product } from '../model/productService/product';
import { ActivatedRoute, Router } from '@angular/router';

import { CartService } from '../model/cartService/cart.service';
import { Cart } from '../model/cartService/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [ProductService, CartService]
})

export class CartComponent implements OnInit {

  product:Product;
  cartProducts: Cart[];
  totalQuantity: number;
  totalAmount: number;
  sub: any;
  productId: string;
  

  constructor(private route: ActivatedRoute,
    private router: Router, 
    private productService: ProductService,
    private cartService: CartService) {
    
      this.cartProducts = this.cartService.getCartProducts();
      
      this.productId = this.route.snapshot.params['pid'];
      this.cartService.addProduct(this.productId);
      
      
      this.totalQuantity = this.cartService.getTotalQuantity();
      this.totalAmount = this.cartService.getTotalAmount();
      
    }

    increaseQuantity(index: number):void{
      this.cartService.increaseQuantity(index);
      this.totalQuantity = this.cartService.getTotalQuantity();
      this.totalAmount = this.cartService.getTotalAmount();
    }
  
    decreaseQuantity(index: number):void{
      this.cartService.decreaseQuantity(index);
      this.totalQuantity = this.cartService.getTotalQuantity();
      this.totalAmount = this.cartService.getTotalAmount();
    }
  
  
    
  ngOnInit() {
    
  }

}
