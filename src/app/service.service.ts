import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

cart:any;
getcourses(){
  return this.cart;
}
  add(item:any){
this.cart.push(item)
  }
}
