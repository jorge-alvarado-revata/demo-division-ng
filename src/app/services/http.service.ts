
import { HttpContext, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError }  from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { HttpContextToken } from '@angular/common/http';

const BYPASS_LOG = new HttpContextToken(()=>false);

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  }),
  context: new HttpContext().set(BYPASS_LOG, true) 
};



@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {

  private SERVER_URL = environment.apiURL;
  

  // eslint-disable-next-line @angular-eslint/prefer-inject
  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {

    let errorMessage = 'error desconocido.';

    if (error.error.detail){
      errorMessage = `${error.error.detail}`; 
    }
    else if ( error.error instanceof ErrorEvent) {
        errorMessage = `Error: ${error.error.message}`;

    } else {
        errorMessage = `Error code ${error.status}\nMessage:${error.message}`;  
    }
    return throwError(() => new Error(errorMessage))
    
}

public sendPost(entidad:string, body: unknown): Observable<unknown> {

    const SERVER_FINAL:string = this.SERVER_URL + `/${entidad}/`; 

    return this.http.post(SERVER_FINAL, body, httpOptions)
    .pipe(
        shareReplay(1),
        catchError(this.handleError)
    );
}


public sendPatch(entidad:string, body: unknown): Observable<unknown> {

  const SERVER_FINAL:string = this.SERVER_URL + `/${entidad}/`; 

  return this.http.patch(SERVER_FINAL, body, httpOptions)
  .pipe(
      shareReplay(1),
      catchError(this.handleError)
  );
}

public sendGet(entidad:string): Observable<unknown>{

  const SERVER_FINAL:string = this.SERVER_URL + `/${entidad}/`; 
  return this.http.get<unknown>(SERVER_FINAL)
   .pipe(
    shareReplay(1),
    catchError(this.handleError)
   );
}


public sendSearch(entidad: string, search: string): Observable<unknown>{
    const SERVER_FINAL:string = this.SERVER_URL + `/${entidad}?nombre=${search}`; 
      return this.http.get<unknown>(SERVER_FINAL)
   .pipe(
    shareReplay(1),
    catchError(this.handleError)
   );
}

public sendGetById(entidad:string, id: number): Observable<unknown>{

  const SERVER_FINAL:string = this.SERVER_URL + `/${entidad}/${id}/`; 
  return this.http.get<unknown>(SERVER_FINAL)
   .pipe(
    shareReplay(1),
    catchError(this.handleError)
   );
}

public sendGetMulti(entidad:string, username: string, index: number): Observable<unknown>{

  const SERVER_FINAL:string = this.SERVER_URL + `/${entidad}`+ `/${username}` + `/${index}`;
  return this.http.get<unknown>(SERVER_FINAL)
   .pipe(
    shareReplay(1),
    catchError(this.handleError)
   );
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
public sendGetMultiParam(entidad:string, ...args: any[]): Observable<unknown>{

  const SERVER_FINAL:string = this.SERVER_URL + `/${entidad}/` +  args[0].join('/');
  return this.http.get<unknown>(SERVER_FINAL)
   .pipe(
    shareReplay(1),
    catchError(this.handleError)
   );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
public sendPutMultiParam(entidad:string, ...args: any[]): Observable<any>{

  const SERVER_FINAL:string = this.SERVER_URL + `/${entidad}/` +  args[0].join('/');
  return this.http.put<unknown>(SERVER_FINAL,'')
   .pipe(
    shareReplay(1),
    catchError(this.handleError)
   );
}


public sendDelete(entidad:string, id: number): Observable<unknown>{

  const SERVER_FINAL:string = this.SERVER_URL + `/${entidad}/${id}/`; 
  return this.http.delete<unknown>(SERVER_FINAL)
   .pipe(
    shareReplay(1),
    catchError(this.handleError)
   );
}


}
