import { Component } from '@angular/core';
import { Location } from '@angular/common';
import {

  ReactiveFormsModule,

} from '@angular/forms';


import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { DivisionService } from '../../app-services/division.service';
import { DivisionFormComponent } from "../division-form/division-form.component";
import { CreateDivisionDto } from '../../tipos/CreateDivisionDto';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { NzCardModule } from 'ng-zorro-antd/card';
import { SelDivision } from '../../tipos/SelDivision';

@Component({
  selector: 'app-division-shell',
  imports: [ReactiveFormsModule, NzButtonModule, NzFormModule, NzInputModule, DivisionFormComponent, NzCardModule, NzIconModule],
  templateUrl: './division-shell.component.html',
  styleUrl: './division-shell.component.scss'
})
export class DivisionShellComponent  {

  listaDivisiones: SelDivision[] = [];

  // eslint-disable-next-line @angular-eslint/prefer-inject
  constructor(private divisionService: DivisionService, private location: Location){

  }

  private SearchDivision(search: string){
    this.divisionService.filtro(search)
    .subscribe(
      {
          next:(val:unknown)=>{
          if (val){
            if (Array.isArray(val) && val.length > 0){
              this.listaDivisiones = val;
            } 
            console.log('se guardo la division:', val);
          }
        },
        error:(error)=>{
          console.log('error backend:',error);

        }
      }
    )
  }


  private SaveDivision(division: CreateDivisionDto){
    this.divisionService.agrega(division)
    .subscribe(
      {
          next:(val)=>{
          if (val){
            console.log('se guardo la division:', val);
          }
        },
        error:(error)=>{
          console.log('error backend:',error);

        }
      }
    )
  }

  onSave(division: unknown){
    this.SaveDivision(division as CreateDivisionDto);
  }

  onSearch(search: string ){
    this.SearchDivision(search)
  }

  regresar(){
        this.location.back();
  }

}
