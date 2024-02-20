import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    loadChildren: () => import("./main/main.module").then(m => m.MainModule)
  }
  ];
