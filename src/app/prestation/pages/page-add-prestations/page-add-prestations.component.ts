import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-add-prestations',
  templateUrl: './page-add-prestations.component.html',
  styleUrls: ['./page-add-prestations.component.scss']
})
export class PageAddPrestationsComponent implements OnInit {

  public title :string ;
  public subtitle :string ;

  constructor(private acRoute :ActivatedRoute ,private router : Router ,private ps:PrestationsService) { }

  ngOnInit(): void {

    this.acRoute.data.subscribe((datas) => {
      this.title = datas.title ;
      this.subtitle = datas.subtitle;
    })

  }

  public addItem(item :any) {
    //console.log(item) ;
    this.ps.add(item).subscribe(
      (res) => {
       // this.router.navigate(['prestations']) ;
        this.router.navigate(["../"] , { relativeTo : this.acRoute} )
      }
    );
  }

}
