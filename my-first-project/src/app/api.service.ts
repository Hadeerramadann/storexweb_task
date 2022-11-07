import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { users } from './users';

@Injectable({
providedIn: 'root'
})

export class ApiService {
  redirectUrl !: string;
  baseUrl:string = "http://localhost:8080/task";
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient : HttpClient) { }

  userregistration(name:any, birthdate:any, email:any, password:any) {

    return this.httpClient.post<any>(this.baseUrl + '/register.php',{name,birthdate, email, password})
      .pipe(
          map(users => {
              return users;
      }));
  }
  userlogin(email: any, password: any) {
    
    return this.httpClient.post<any>(this.baseUrl + '/login.php',{ email, password})
      .pipe(
          map(users => {
            this.setToken(users.email);
             this.getLoggedInName.emit(true);
              return users;
      }));
  }
  setToken(token:string) {
    localStorage.setItem('token' , token);
    }
    getToken() {
      return localStorage.getItem('token');
      }
      deleteToken() {
        localStorage.removeItem('token' );
      }
      
      isLoggedIn(){
        const usertoken = this.getToken();
        if(usertoken != null) {
        return true
        }
        return false;
    }
 


  


}