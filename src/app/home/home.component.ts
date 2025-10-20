import { Component } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { BodyComponent } from "./body/body.component";
import { TbMainComponent } from "./tb-main/tb-main.component";
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';

@Component({
  selector: 'app-home',
  imports: [NzLayoutModule, BodyComponent, TbMainComponent, NzPageHeaderModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
