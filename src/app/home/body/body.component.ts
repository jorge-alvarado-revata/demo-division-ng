import { Component } from '@angular/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzPageHeaderModule } from "ng-zorro-antd/page-header";
import { NzSpaceComponent } from "ng-zorro-antd/space";
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { TableComponent } from "./table/table.component";
import {FormsModule} from '@angular/forms';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-body',
  imports: [NzMenuModule, 
    NzSpaceModule, 
    NzSpaceComponent, 
    NzPageHeaderModule, 
    NzButtonModule, 
    NzIconModule, 
    NzDescriptionsModule, 
    TableComponent, 
    FormsModule,
    RouterLink
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {
  constructor(){ /* empty */ }

}
