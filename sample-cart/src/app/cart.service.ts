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
    if (this.items.indexOf(item) < 0) {
      this.items.push(item);
    }
  };

  removeItemsBasedOnId = (id) => {
    var index = this.items.indexOf(id);
    this.items = this.items.splice(index, 1);
  };
}
