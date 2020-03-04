import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/app/shared/models/prestation';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit {

  public collection$: Observable<Prestation[]>;

  public thElements = [ "Type" , "Client","NbJours","TjmHT" , "Total HT" , "Total TTC" , "State"]
 ;

  constructor(private ps : PrestationsService) { }

  ngOnInit(): void {

    this.collection$ = this.ps.collection ;

   /* this.ps.collection.subscribe(
      (datas) => {
        this.collection = datas ;
      }
    ) ;*/
  }

}
