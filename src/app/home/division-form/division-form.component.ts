import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import {
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,

  Validators
} from '@angular/forms';


import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { CreateDivisionDto } from '../../tipos/CreateDivisionDto';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { SelDivision } from '../../tipos/SelDivision';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-division-form',
  imports: [ReactiveFormsModule, NzButtonModule, NzFormModule, NzInputModule, NzSelectModule, FormsModule, NzIconModule],
  templateUrl: './division-form.component.html',
  styleUrl: './division-form.component.scss'
})
export class DivisionFormComponent {

    // eslint-disable-next-line @angular-eslint/no-output-on-prefix
    @Output() onSave = new EventEmitter();
    // eslint-disable-next-line @angular-eslint/no-output-on-prefix
    @Output() onSearch  = new EventEmitter()

   private fb = inject(NonNullableFormBuilder);

   @Input() listaDivisiones!: SelDivision[];

    divisionForm = this.fb.group({
      nombre: this.fb.control('', [Validators.required, Validators.maxLength(45)]),
      colaboradores: this.fb.control(0, [Validators.min(0), Validators.max(1000), Validators.required]),
      nivel: this.fb.control(0,  [Validators.min(0), Validators.max(1000), Validators.required]),
      embajador: this.fb.control('', [Validators.required]),
      parentId: this.fb.control(null, [])
    });

    searchForm = this.fb.group({
      search: this.fb.control('')
    })

  submitForm(){

        if (this.divisionForm.valid){
        const data = this.divisionForm.value as CreateDivisionDto; 
        this.onSave.emit(data);
        //this.divisionForm.reset();
    }
  }

  buscar(dato: unknown){ 
    if (dato){
      this.onSearch.emit(dato)
    }
  }

  resetForm(e:unknown){
    console.log(e)
    this.divisionForm.reset();

  }

}
