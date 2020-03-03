import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PrestationRoutingModule } from './prestation-routing.module';



@NgModule({
  declarations: [PagePrestationsComponent],
  imports: [
    CommonModule,
    PrestationRoutingModule
  ]
})
export class PrestationModule { }
