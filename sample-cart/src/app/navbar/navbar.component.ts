import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import CartService from "../cart.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  navForm: FormGroup;
  cartCount;
  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.navForm = this.formBuilder.group({
      search: ["", [Validators.required]],
    });
    this.cartCount = this.cartService.getItems().length;
  }
}
