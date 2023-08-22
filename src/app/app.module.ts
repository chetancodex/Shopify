import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { SidenavComponent } from './common/sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyRewardsComponent } from './myprofile/my-rewards/my-rewards.component';
import { NotificationsComponent } from './myprofile/notifications/notifications.component';
import { ProfileInfoComponent } from './myprofile/profile-info/profile-info.component';
import { ReviewRatingComponent } from './myprofile/review-rating/review-rating.component';
import { SavedCardsComponent } from './myprofile/saved-cards/saved-cards.component';
import { ShoppingCartComponent } from './myprofile/shopping-cart/shopping-cart.component';
import { WishlistComponent } from './myprofile/wishlist/wishlist.component';
import { ProductsComponent } from './products/products.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { MyProfileComponent } from './myprofile/myprofile.component'
import { HttpClientModule } from '@angular/common/http'
import { LoadingSpinner } from './services/loading-spinner/loading-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from './lib/acoordian/accordian.module';
import { SignupComponent } from './signup/signup.component';
import { StoreModule, provideStore } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { productReducer } from './products/state/reducer';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    HomeComponent,
    LoginComponent,
    MyRewardsComponent,
    NotificationsComponent,
    ProfileInfoComponent,
    ReviewRatingComponent,
    SavedCardsComponent,
    ShoppingCartComponent,
    WishlistComponent,
    ProductsComponent,
    SingleProductComponent,
    MyProfileComponent,
    LoadingSpinner,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AccordionModule,
    StoreModule.forRoot({
      products : productReducer
    }),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
