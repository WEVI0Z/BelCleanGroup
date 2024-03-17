import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    loadChildren: () => import("./main/main.module").then(m => m.MainModule),
  },
  {
    path: "item",
    loadChildren: () => import("./item/item.module").then(m => m.ItemModule),
  },
  {
    path: "contacts",
    loadChildren: () => import("./contacts/contacts.module").then(m => m.ContactsModule),
  },
  {
    path: "about",
    loadChildren: () => import("./about/about.module").then(m => m.AboutModule),
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
