import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-prestation',
  templateUrl: './form-prestation.component.html',
  styleUrls: ['./form-prestation.component.scss']
})
export class FormPrestationComponent implements OnInit {

  public states = Object.values(State) ;

  @Output() nItem : EventEmitter<Prestation> = new EventEmitter();

  @Input() item: Prestation = new Prestation() ;

  public form : FormGroup ;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      typePresta:[
        this.item.typePresta ,
        Validators.required
      ],
      client:[
        this.item.client ,
        Validators.compose([Validators.required , Validators.minLength(2)])
      ],
      tjmHt : [this.item.tjmHt],
      nbJours : [this.item.nbJours],
      tva : [this.item.tva],
      state : [this.item.state],
      comment : [this.item.comment],
      id : [this.item.id]
    });

  }

  public onSubmit(){
    //console.log(this.form.value) ;
    this.nItem.emit(this.form.value) ;
  }

}
