import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { MyProfileComponent } from './myprofile/myprofile.component';
import { ProfileInfoComponent } from './myprofile/profile-info/profile-info.component';
import { MyRewardsComponent } from './myprofile/my-rewards/my-rewards.component';
import { NotificationsComponent } from './myprofile/notifications/notifications.component';
import { ReviewRatingComponent } from './myprofile/review-rating/review-rating.component';
import { SavedCardsComponent } from './myprofile/saved-cards/saved-cards.component';
import { ShoppingCartComponent } from './myprofile/shopping-cart/shopping-cart.component';
import { SidenavComponent } from './common/sidenav/sidenav.component';
import { AuthGuard } from './services/auth-service';
import { SignupComponent } from './signup/signup.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { OrdersComponent } from './myprofile/orders/orders.component';

const routes: Routes = [
  { path: "" ,component: HomeComponent, },
  {path:"products/:id", component: SingleProductComponent },
  {path: "products", component: ProductsComponent},
  
  {path:"login",component : LoginComponent},
  {path:"signup",component: SignupComponent},
  {path:"side-nav" ,component: SidenavComponent},
  {path:"myprofile", component:MyProfileComponent, canActivate:[AuthGuard] ,children:[
          {path:'profile', component:ProfileInfoComponent },
          {path:'rewards',component:MyRewardsComponent },
          {path:'notifications',component:NotificationsComponent},
          {path:'review', component:ReviewRatingComponent },
          {path:'saved-cards', component:SavedCardsComponent},
          {path:'shopping-cart',component:ShoppingCartComponent},
          {path : 'orders' , component : OrdersComponent},
          {
            path: '',
            redirectTo: 'myprofile',
            pathMatch: 'full'
          }
]},
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: '*', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
