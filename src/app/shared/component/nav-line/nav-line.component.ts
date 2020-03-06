import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-line',
  templateUrl: './nav-line.component.html',
  styleUrls: ['./nav-line.component.scss']
})
export class NavLineComponent implements OnInit {

  @Input() list : { route : string , label :string }[] ;

  constructor() { }

  ngOnInit(): void {
  }

}
