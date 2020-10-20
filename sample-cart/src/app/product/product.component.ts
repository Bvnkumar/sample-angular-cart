import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import CartService from "../cart.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  productList;
  @Output() sendAddedItem = new EventEmitter();
  constructor(private http: HttpClient, private cartService: CartService) {}
  ngOnInit() {
    this.http
      .get("http://localhost:8081/product/getAllProducts")
      .subscribe((data) => {
        console.log("data ", data);
        this.productList = data;
      });
  }
  addItems = (item) => {
    this.cartService.addItems(item);
    console.log("this.cartService.getItems() ", this.cartService.getItems());
    this.sendAddedItem.emit(this.cartService.getItems().length + "");
  };
}
