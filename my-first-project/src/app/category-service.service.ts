import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { catigories } from './catigories';
@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  
 
  // }
 
  id:any;
  titel:any;
  // redirectUrl !: string;
  baseUrl:string = "http://localhost:8080/task";
  http: any;
  // @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private httpClient : HttpClient) { }

  getcatigory() {
    return this.httpClient.get<catigories[]>(this.baseUrl+'/view_catigories.php');
  }

  deletecategory(id:any) {
    
      return this.httpClient.delete(this.baseUrl+'/delete_catigory.php?id='+id);
  }
  add_catigory(titel:any) {
    
    return this.httpClient.post<any>(this.baseUrl + '/add_catigory.php',{titel})
    .pipe(
        map(catigories => {
            return catigories;
    }));
  }

  get_single_catigory(catigory_id: any) {
    return this.httpClient.get<catigories[]>(this.baseUrl+'/view_catigories.php?id='+catigory_id);

  }
  edit_catigory(titel: any,id:any) {
   
    return this.httpClient.post<any>(this.baseUrl + '/update_catigory.php',{titel,id})
    
  }
}
