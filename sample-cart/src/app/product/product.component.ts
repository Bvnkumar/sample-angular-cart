import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  constructor(private http: HttpClient) {}
  productList;
  ngOnInit() {
    this.http
      .get("http://localhost:8081/product/getAllProducts")
      .subscribe((data) => {
        console.log("data ", data);
        this.productList = data;
      });
  }
}
