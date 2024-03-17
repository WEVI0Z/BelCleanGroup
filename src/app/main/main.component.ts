import {Component} from '@angular/core';
import {FooterComponent} from "../shared/footer/footer.component";
import {HeaderComponent} from "../shared/header/header.component";
import {NgForOf} from "@angular/common";
import {Item} from "../shared/interface/item";
import {ItemsService} from "../shared/entity/items.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    NgForOf,
    RouterLink
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  protected itemList: Item[];

  constructor(protected itemsService: ItemsService) {
    this.itemList = this.itemsService.items;
  }
}
