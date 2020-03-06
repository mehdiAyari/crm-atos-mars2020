import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddPrestationsComponent } from './pages/page-add-prestations/page-add-prestations.component';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PageEditPrestationComponent } from './pages/page-edit-prestation/page-edit-prestation.component';



const appRoutes: Routes = [
  {
    path: '',
    component : PagePrestationsComponent ,
    data : { title : "Prestations" , subtitle : "Toutes les prestations" }
  },
  {
    path: 'add',
    component : PageAddPrestationsComponent ,
    data : { title : "Prestations" , subtitle : "Ajouter une prestation" }
  }
  ,
  {
    path: 'edit/:id',
    component : PageEditPrestationComponent ,
    data : { title : "Prestations" , subtitle : "Editer une prestation" }
  }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class PrestationRoutingModule { }
