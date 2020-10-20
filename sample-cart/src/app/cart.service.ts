import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export default class CartService {
  items = [];
  constructor() {}

  getItems = () => {
    return this.items;
  };

  addItems = (item) => {
    this.items.push(item);
  };
}
