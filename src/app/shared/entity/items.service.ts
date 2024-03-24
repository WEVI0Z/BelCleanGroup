import { Injectable } from '@angular/core';
import {Item} from "../interface/item";
import {napkins} from "./napkins";
import {cart1} from "./cart-1";
import {cart2} from "./cart-2";
import {cart3} from "./cart-3";
import {cart4} from "./cart-4";
import {cart5} from "./cart-5";
import {cart6} from "./cart-6";
import {cart11} from "./cart-11";
import {cart10} from "./cart-10";
import {cart9} from "./cart-9";
import {cart8} from "./cart-8";
import {cart7} from "./cart-7";
import {napkins2} from "./napkins-2";
import {cart12} from "./cart-12";
import {cart13} from "./cart-13";
import {cart14} from "./cart-14";
import {napkins3} from "./napkins-3";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  public items: Item[] = [];

  constructor() {
    this.items.push(napkins);
    this.items.push(napkins2);
    this.items.push(napkins3);
    this.items.push(cart1);
    this.items.push(cart2);
    this.items.push(cart3);
    this.items.push(cart4);
    this.items.push(cart5);
    this.items.push(cart6);
    this.items.push(cart7);
    this.items.push(cart8);
    this.items.push(cart9);
    this.items.push(cart10);
    this.items.push(cart11);
    this.items.push(cart12);
    this.items.push(cart13);
    this.items.push(cart14);
  }
}
