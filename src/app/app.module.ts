import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CoursesComponent } from './courses/courses.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { GallaryComponent } from './gallary/gallary.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CarouselComponent,
    CoursesComponent,
    OurservicesComponent,
    AboutComponent,
    BlogComponent,
    RegisterComponent,
    LoginComponent,
    GallaryComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
