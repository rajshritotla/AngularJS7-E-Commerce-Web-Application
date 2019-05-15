import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { InvalidPathComponent } from './invalid-path/invalid-path.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [

  { path:'', redirectTo:'/products', pathMatch:'full' },
  { path:'products', component:ProductListComponent  },
  { path:'product/:pid', component:ProductDetailComponent  },
  { path:'cart', component:CartComponent, },
  { path:'cart/checkout', component:CheckoutComponent },
  { path:'cart/:pid', component:CartComponent, },
  { path:'checkout', component:CheckoutComponent },  
  { path: '**', component: InvalidPathComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
