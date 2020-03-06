import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PrestationRoutingModule } from './prestation-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PageAddPrestationsComponent } from './pages/page-add-prestations/page-add-prestations.component';
import { FormPrestationComponent } from './pages/form-prestation/form-prestation.component';



@NgModule({
  declarations: [PagePrestationsComponent, PageAddPrestationsComponent, FormPrestationComponent],
  imports: [
    CommonModule,
    PrestationRoutingModule,
    SharedModule
  ]
})
export class PrestationModule { }
