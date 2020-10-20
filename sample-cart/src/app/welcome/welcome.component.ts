import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { increment } from "./welcome.actions";
import { Observable } from "rxjs";
import CartService from "../cart.service";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.scss"],
})
export class WelcomeComponent implements OnInit {
  count$: Observable<any>;
  itemCount;
  constructor(private store: Store, private cartService: CartService) {
    // this.count$ = store.select("welcome");
  }

  ngOnInit() {}
  increment() {
    this.store.dispatch(increment());
  }
  sendAddedItem = () => {
    this.itemCount = this.cartService.getItems().length;
    console.log("this.itemCount ", this.itemCount);
  };
}
