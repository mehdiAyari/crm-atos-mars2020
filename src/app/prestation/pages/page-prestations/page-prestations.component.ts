import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/app/shared/models/prestation';
import { Observable } from 'rxjs';
import { State } from 'src/app/shared/enums/state.enum';
import { TransferState } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit {

  public collection$: Observable<Prestation[]>;

  public thElements = [ "Type" , "Client","NbJours","TjmHT" , "Total HT" , "Total TTC" , "State"]
 ;

  public title :string ;
  public subtitle :string ;


  public label  ;
  public route  ;
  public externalLink ;

  public states = Object.values(State) ;

  constructor(private ps : PrestationsService , private acRoute :ActivatedRoute) { }

  ngOnInit(): void {

    this.collection$ = this.ps.collection ;


    this.acRoute.data.subscribe((datas) => {
      this.title = datas.title ;
      this.subtitle = datas.subtitle;
    })



    this.label ="Ajoputer une prestation" ;
    this.route = "add" ;
    this.externalLink="https://www.google.fr" ;

   /* this.ps.collection.subscribe(
      (datas) => {
        this.collection = datas ;
      }
    ) ;*/
  }

  public chnageState(item: Prestation , event){
    console.log(event.target.value);
    this.ps.updateState(item, event.target.value).subscribe((res:Prestation) => {item.state = res.state ;});
  }

}
