import { Directive, Input, OnInit, HostBinding, OnChanges } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {

  @Input() appState: any ;

  @HostBinding("class") classTd :String ;

  constructor() {
    console.log("log directive ");
  }

  ngOnChanges(): void {
    console.log(this.appState)
    this.classTd = this.formatClass(this.appState);
  }
  private formatClass(state: any) {
    return `state-${state.normalize("NFD").replace(/[\u0300-\u036f\s]/g, "").toLowerCase()}`;
  }

}
