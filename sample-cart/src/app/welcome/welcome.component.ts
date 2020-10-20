import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { increment } from "./welcome.actions";
import { Observable } from "rxjs";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.scss"],
})
export class WelcomeComponent implements OnInit {
  count$: Observable<any>;

  constructor(private store: Store) {
    // this.count$ = store.select("welcome");
  }

  ngOnInit() {}
  increment() {
    this.store.dispatch(increment());
  }
}
