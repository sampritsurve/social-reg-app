import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LinkedinAuthService {

  constructor( private http: HttpClient ) {  }

  getAuth(){
    this.http.post<any>('https://www.linkedin.com/oauth/v2/accessToken',{})
  }

}
