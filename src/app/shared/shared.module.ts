import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { TableauLightComponent } from './component/tableau-light/tableau-light.component';
import { TableauDarkComponent } from './component/tableau-dark/tableau-dark.component';
import { TemplateModule } from '../template/template.module';
import { ButtonComponent } from './component/button/button.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [TotalPipe, StateDirective, TableauLightComponent, TableauDarkComponent, ButtonComponent],
  exports : [
    TotalPipe,
    StateDirective,
    TableauLightComponent,
    TableauDarkComponent,
    TemplateModule,
    ButtonComponent,
    ReactiveFormsModule
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
