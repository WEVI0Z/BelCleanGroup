import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {ItemComponent} from "./item.component";

const routes: Routes = [
  {
    path: ":name",
    component: ItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule]
})
export class ItemRoutingModule { }
