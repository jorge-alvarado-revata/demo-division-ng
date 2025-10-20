import { inject, Injectable } from '@angular/core';
import { ApiHttpService } from '../services/http.service';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { CreateDivisionDto } from '../tipos/CreateDivisionDto';
import { UpdateDivisionDto } from '../tipos/UpdateDivisionDto';
import { EliminaHijosDto } from '../tipos/EliminaHijosDto';

@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  private httpService = inject(ApiHttpService);

  constructor() { /* empty */ }

  agrega(division: CreateDivisionDto): Observable<unknown>{
    const path = environment.path.agrega;
    return this.httpService.sendPost(path, division);
  }
  todos():Observable<unknown>{
    const path = environment.path.todos;
    return this.httpService.sendGet(path);
  }
  hijos(id: number){
    const path = environment.path.hijos;
    return this.httpService.sendGetById(path, id);
  }
  solo(id: number){
    const path = environment.path.solo;
    return this.httpService.sendGetById(path, id);
  }
  setpadre(id: number, parentId: number){

    const path = environment.path.setpadre + `/${id}/${parentId}`;
    return this.httpService.sendPutMultiParam(path)
  }
  update(divisionActualizada: UpdateDivisionDto){
    const path = environment.path.update;
    return this.httpService.sendPatch(path, divisionActualizada);
  }
  retira(retiraDivisiones: EliminaHijosDto){
    const path = environment.path.retira;
    return this.httpService.sendPost(path, retiraDivisiones);
  }
  delete(id: number){
    const path = environment.path.delete;
    return this.httpService.sendDelete(path, id);
  }

  filtro(search: string){
    const path = environment.path.filtro;
    return this.httpService.sendSearch(path, search)
  }
}
