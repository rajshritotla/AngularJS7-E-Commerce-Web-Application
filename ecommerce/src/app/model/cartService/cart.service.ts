import { Injectable } from '@angular/core';
import { Cart } from './cart';
import { ProductService } from '../productService/product.service';
import { Product } from '../productService/product';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  cartProducts: Cart[];
  totalQuantity: number;
  totalAmount: number;
  product: Product;

  constructor(private productService: ProductService) { 
        if(window.localStorage.getItem("cart"))
        {
            this.cartProducts = JSON.parse(window.localStorage.getItem("cart"));
        }
        else
        {
            this.cartProducts = [];
        }

        
  }

  getCartProducts():Cart[]{
    return this.cartProducts;
  }

  getTotalQuantity():number{
    //this.updateTotal();
    return this.totalQuantity;
  }

  getTotalAmount():number{
    //this.updateTotal();
    return this.totalAmount;
  }

  updateCartProducts():void{
      window.localStorage.setItem("cart",JSON.stringify(this.cartProducts));
  }

  addProduct(productId:string):void{
    this.product = this.productService.getProduct(productId);
    if(productId!='undefined' && this.product.pid){       // 2nd arg check if product actuallu exists
        let productNotInCart = 1;
        for(let index=0; index<this.cartProducts.length; index++){
            if(this.cartProducts[index].productID==productId){
              this.cartProducts[index].quantity = this.cartProducts[index].quantity + 1;
              productNotInCart = 0;
              break;
            }
        }
        if(productNotInCart==1){
            this.cartProducts.push({
              productID: productId,
              productName: this.product.name,
              quantity: 1,
              rate: this.product.rate
            });
        }
        this.updateCartProducts(); // update local storage
  }
  else{
    //window.location.href ="/cart";
  }
  this.updateTotal();
  }

  updateTotal():void{
    this.totalQuantity = 0;
    this.totalAmount = 0;
    for(let index = 0 ; index < this.cartProducts.length ; index++){
      this.totalQuantity = this.totalQuantity + this.cartProducts[index].quantity;
      this.totalAmount = this.totalAmount + this.cartProducts[index].quantity * this.cartProducts[index].rate;
    }
  }

  increaseQuantity(index: number):void{
    this.cartProducts[index].quantity++;
    this.updateTotal();
    this.updateCartProducts();
  }

  decreaseQuantity(index: number):void{
    this.cartProducts[index].quantity--;
    if(this.cartProducts[index].quantity == 0){
      this.cartProducts.splice(index, 1);
    }
    this.updateTotal();
    this.updateCartProducts();
  }

}
