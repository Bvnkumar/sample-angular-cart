import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor( private http : HttpClient) { }
  cartList ;

  ngOnInit() {
    this.http
    .post("http://localhost:8081/product/getAllOrdersWithIds",[1,2])
    .subscribe((data)=>{
      console.log("cartList",data);
      this.cartList=data;
    });
  }

}
