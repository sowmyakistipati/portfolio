import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
constructor(private service:ServiceService){}
cart:any;
ngOnInit(){
  this.cart=this.cart.getcourses();
}
}
