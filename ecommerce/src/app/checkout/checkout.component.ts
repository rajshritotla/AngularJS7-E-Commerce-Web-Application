import { Component, OnInit } from '@angular/core';
import { ProductService } from '../model/productService/product.service';
import { Product } from '../model/productService/product';
import { ActivatedRoute, Router } from '@angular/router';

import { AlertsService } from 'angular-alert-module';

import { CartService } from '../model/cartService/cart.service';
import { Cart } from '../model/cartService/cart';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  providers: [ProductService,AlertsService,CartService]
})
export class CheckoutComponent implements OnInit {

  product:Product;
  sub: any;
  cartProducts: Cart[];
  totalQuantity: number;
  totalAmount: number;
  
  constructor(private route: ActivatedRoute,
    private router: Router, 
    private productService: ProductService,
    private cartService: CartService,
    private alerts: AlertsService) {

      this.cartProducts = this.cartService.getCartProducts();
      this.cartService.updateTotal();
      this.totalQuantity = this.cartService.getTotalQuantity();
      this.totalAmount = this.cartService.getTotalAmount();
      
  }

  
  // CALLING USPS API
  finalPay(address1:string,address2:string,city:string,state:string,zipcode:number):void{
    let userid='*****';   // ENTER USER ID
    let xml="<ZipCodeLookupRequest USERID='"+ userid +"'><Revision>1</Revision><Address ID='0'><FirmName></FirmName><Address1>"+address1+"</Address1><Address2>"+address2+"</Address2><City>"+city+"</City><State>"+state+"</State></Address></ZipCodeLookupRequest>";
    let url="http://production.shippingapis.com/ShippingAPI.dll?API=ZipCodeLookup&XML="+xml;

    const myRequest = new Request(url);
    fetch(myRequest)
    .then(response => {
        response.text().then(text =>{
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(text,"text/html");
                    
            if( xmlDoc.getElementsByTagName("ReturnText") && xmlDoc.getElementsByTagName("ReturnText").length > 0){
                console.log(this.getNodeValue(xmlDoc,"ReturnText"),"ZipCode:",this.getNodeValue(xmlDoc,"Zip5"));
                this.alerts.setMessage('Correct Address','success');
            }
            else
            {
                if(xmlDoc.getElementsByTagName("Zip5") && xmlDoc.getElementsByTagName("Zip5").length > 0){
                  console.log("ZipCode:", this.getNodeValue(xmlDoc,"Zip5")); 
                  this.alerts.setMessage('Zipcode','warn');
                }
                else{
                    console.log("Error: Address Not found");
                    this.alerts.setMessage('Error: Address Not found','error');
                }
            }
            

        });
    });

    

  }

  getNodeValue(xmlDoc:any,tagName:any){
    return tagName ? xmlDoc.getElementsByTagName(tagName)[0].childNodes[0].nodeValue : null;
  }
  
  ngOnInit() {
  }

}
