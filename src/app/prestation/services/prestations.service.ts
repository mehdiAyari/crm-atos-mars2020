import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prestation } from 'src/app/shared/models/prestation';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { State } from 'src/app/shared/enums/state.enum';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {

  private pCollection$ : Observable<Prestation[]>;
  itemDetails$ = new BehaviorSubject<Prestation>(null);

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Prestation[]>(`${environment.urlApi}prestations`).pipe(

      map( tab=> tab.map( objJson => new Prestation(objJson)) )

      /*map((tab) => {
        return tab.map((objJson) => {
          return new Prestation(objJson);
        })
      })*/
    ) ;
  }

  // get collection
  public get collection() :  Observable<Prestation[]>{
    return this.pCollection$ ;
  }

  //set Collection
  public set collection(col :  Observable<Prestation[]>) {
    this.pCollection$ = col  ;
  }

  public updateState(item : Prestation,state:State){
    let obj:Prestation= new Prestation(item) ;
    obj.state = state ;
    return this.update(obj);
  }

  public update(item:Prestation){
    return this.http.patch(`${environment.urlApi}prestations/${item.id}`,item);
  }

  // add item in coleection

  public add(item : any){
    return this.http.post(`${environment.urlApi}prestations`,item);
  }

  // update item in collection

  // delete item in collection

  public delete(item : Prestation){
    return this.http.delete(`${environment.urlApi}prestations/${item.id}`);
  }

  // get item by id from collection

  public getItemById(id : string){
    return this.http.get<Prestation>(`${environment.urlApi}prestations/${id}`);
  }

  public setDetails(item : Prestation) {
    this.itemDetails$.next(item) ;
  }

}
