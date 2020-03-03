import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { UiComponent } from './components/ui/ui.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [UiComponent, NavComponent, FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports : [
    UiComponent,NavComponent, FooterComponent, HeaderComponent
  ]
})
export class UiModule { }
