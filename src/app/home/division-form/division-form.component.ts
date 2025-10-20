import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,

  Validators
} from '@angular/forms';


import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { CreateDivisionDto } from '../../tipos/CreateDivisionDto';

@Component({
  selector: 'app-division-form',
  imports: [ReactiveFormsModule, NzButtonModule, NzFormModule, NzInputModule],
  templateUrl: './division-form.component.html',
  styleUrl: './division-form.component.scss'
})
export class DivisionFormComponent {

    // eslint-disable-next-line @angular-eslint/no-output-on-prefix
    @Output() onSave = new EventEmitter();

   private fb = inject(NonNullableFormBuilder);

    divisionForm = this.fb.group({
    nombre: this.fb.control('', [Validators.required, Validators.maxLength(45)]),
    colaboradores: this.fb.control(0, [Validators.min(0), Validators.max(1000), Validators.required]),
    nivel: this.fb.control(0,  [Validators.min(0), Validators.max(1000), Validators.required]),
    embajador: this.fb.control('', [Validators.required]),
    padre: this.fb.control(null, [])
  });

  submitForm(){

        if (this.divisionForm.valid){
        const data = this.divisionForm.value as CreateDivisionDto; 
        this.onSave.emit(data);
        this.divisionForm.reset();
    }
  }

  resetForm(e:unknown){
    console.log(e)
    this.divisionForm.reset();

  }

}
