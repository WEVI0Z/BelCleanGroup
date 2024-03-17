import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ItemsService} from "../shared/entity/items.service";
import {Router} from "@angular/router";
import {Item} from "../shared/interface/item";
import {FooterComponent} from "../shared/footer/footer.component";
import {HeaderComponent} from "../shared/header/header.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    NgForOf
  ],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent implements OnInit {
  protected item: Item = this.itemsService.items[0];

  constructor(private itemsService: ItemsService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.identifyContent(this.router.url);
  }

  identifyContent(url: string): void {
    this.itemsService.items.forEach(item => {
      if (url.includes(item.name)) {
        this.item = item;
      }
    })
  }
}
