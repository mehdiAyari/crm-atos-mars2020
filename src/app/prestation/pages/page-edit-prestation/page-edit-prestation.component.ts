import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/app/shared/models/prestation';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-page-edit-prestation',
  templateUrl: './page-edit-prestation.component.html',
  styleUrls: ['./page-edit-prestation.component.scss']
})
export class PageEditPrestationComponent implements OnInit {

  public title :string ;
  public subtitle :string ;

  public itemId  : string;

  public item : any ;

  public item$: Observable<Prestation> ;

  constructor(private acRoute :ActivatedRoute ,private router : Router ,private ps:PrestationsService) { }

  ngOnInit(): void {

    this.acRoute.data.subscribe((datas) => {
      this.title = datas.title ;
      this.subtitle = datas.subtitle;
    });

    this.acRoute.paramMap.subscribe((params) => {
      this.itemId =params.get('id') ;
      this.item$ = this.ps.getItemById(params.get('id'));
    });

    this.item$ = this.acRoute.paramMap.pipe(
      switchMap((params: ParamMap)=> {
        return this.ps.getItemById(params.get('id'));
      }
      )
    )

    //console.log(this.idItem);

  }

  public updateItem(item :any) {
    //console.log(item) ;

    item.id = this.itemId ;
    this.ps.update(item).subscribe((res) =>  {
      this.router.navigate(["../../"] , { relativeTo : this.acRoute} )
    }) ;
    console.log(item) ;
    /*this.ps.add(item).subscribe(
      (res) => {
       // this.router.navigate(['prestations']) ;
        this.router.navigate(["../"] , { relativeTo : this.acRoute} )
      }
    );*/
  }

}
