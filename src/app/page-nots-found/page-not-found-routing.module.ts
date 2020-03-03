import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';




const appRoutes: Routes = [
  {
    path: '',
    component : PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class PageNotFoundRoutingModule { }
