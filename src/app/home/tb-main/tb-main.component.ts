import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';


@Component({
  selector: 'app-tb-main',
  imports: [NzButtonModule, NzDropDownModule, NzIconModule],
  templateUrl: './tb-main.component.html',
  styleUrl: './tb-main.component.scss'
})
export class TbMainComponent {

}
