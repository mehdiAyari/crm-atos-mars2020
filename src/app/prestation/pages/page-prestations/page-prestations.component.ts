import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/app/shared/models/prestation';
import { Observable, BehaviorSubject } from 'rxjs';
import { State } from 'src/app/shared/enums/state.enum';
import { TransferState } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import {faTrashAlt , faEdit} from  '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit {

  public collection$ = new BehaviorSubject<Prestation[]>(null);

  public thElements = [ "Type" , "Client","NbJours","TjmHT" , "Total HT" , "Total TTC" , "State" ,"Delete"]
 ;

  public title :string ;
  public subtitle :string ;


  public label  ;
  public route  ;
  public externalLink ;

  public states = Object.values(State) ;

  public faTrashAlt = faTrashAlt ;
  public faEdit= faEdit ;

  public listLinks : {route : string , label:string}[] ;

  constructor(private ps : PrestationsService , private acRoute :ActivatedRoute , private router : Router) { }

  ngOnInit(): void {

    this.listLinks = [
      {route : "details" , label:'details'},
      {route : "comments" , label:'commentaires'}
    ];

    this.ps.collection.subscribe((datas) => {
      this.collection$.next(datas) ;
    }) ;


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

  public delete(item : Prestation) {
    this.ps.delete(item).subscribe((res:Prestation) => {
      //traiter reponse api ;
      console.log(res);
      this.ps.collection.subscribe((datas) => {
        this.collection$.next(datas) ;
      }) ;


    });
  }

  public edit(item : Prestation) {
    this.router.navigate(['prestations/edit',item.id]);
  }

  public details(item : Prestation){
    this.ps.setDetails(item);
  }
}
