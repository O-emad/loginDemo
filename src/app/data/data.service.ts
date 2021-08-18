import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILoginFormData } from './login-form-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }

  postLoginForm(loginData: ILoginFormData): Observable<any>{
    console.log(loginData);
    return this.http.post('https://putsreq.com/wTtcAY080XSRylrPGf82',loginData);
  }
}
