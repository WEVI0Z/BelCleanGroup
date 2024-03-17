import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {ContactsComponent} from "./contacts.component";

const routes: Routes = [
  {
    path: "",
    component: ContactsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
