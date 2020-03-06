import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PrestationRoutingModule } from './prestation-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PageAddPrestationsComponent } from './pages/page-add-prestations/page-add-prestations.component';
import { FormPrestationComponent } from './pages/form-prestation/form-prestation.component';
import { PageEditPrestationComponent } from './pages/page-edit-prestation/page-edit-prestation.component';
import { DetailsComponent } from './pages/details/details.component';
import { CommentsComponent } from './pages/comments/comments.component';



@NgModule({
  declarations: [PagePrestationsComponent, PageAddPrestationsComponent, FormPrestationComponent, PageEditPrestationComponent, DetailsComponent, CommentsComponent],
  imports: [
    CommonModule,
    PrestationRoutingModule,
    SharedModule
  ]
})
export class PrestationModule { }
