import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { BlogComponent } from './blog/blog.component';
import { CoursesComponent } from './courses/courses.component';
import { AboutComponent } from './about/about.component';
import { GallaryComponent } from './gallary/gallary.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:'',component:NavbarComponent,
  children:[
  
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'carousel',component:CarouselComponent},
  {path:'footer',component:FooterComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'ourservices',component:OurservicesComponent},
  {path:'blog',component:BlogComponent},
  {path:'courses',component:CoursesComponent},
  {path:'gallary',component:GallaryComponent},
  {path:'about',component:AboutComponent},
  {path:'cart',component:CartComponent}
]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
