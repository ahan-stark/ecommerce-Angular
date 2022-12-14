import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { CartComponent } from './cart/cart.component';
import { CategoryComponent } from './category/category.component';
import { PreviewProductsComponent } from './preview-products/preview-products.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'preview', component: PreviewProductsComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
