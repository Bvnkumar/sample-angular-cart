import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import CartService from "../cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit {
  constructor(private http: HttpClient, private cartService: CartService) {}
  cartList;

  ngOnInit() {
    this.http
      .post(
        "http://localhost:8081/product/getAllOrdersWithIds",
        this.cartService.getItems()
      )
      .subscribe((data) => {
        console.log("cartList", data);
        this.cartList = data;
      });
  }
}
