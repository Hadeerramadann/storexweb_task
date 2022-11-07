import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { movies } from './movies';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  
  
  baseUrl:string = "http://localhost:8080/task";
  http: any;
  constructor(private httpClient : HttpClient) { }

  getmovies() {
    return this.httpClient.get<movies[]>(this.baseUrl+'/view_movies.php');
  }
  deletemovie(id:any) {
    
    return this.httpClient.delete(this.baseUrl+'/delete_movie.php?id='+id);
}
add_movie(title: any,description: any,Rate: any,image: any,category_id: any) {
  return this.httpClient.post<any>(this.baseUrl + '/add_movie.php',{title,description,Rate,image,category_id})
  .pipe(
      map(movies => {
          return movies;
  }));
}
get_single_movie(movie_id: any) {
  return this.httpClient.get<movies[]>(this.baseUrl+'/view_movies.php?id='+movie_id);

}
edit_movie(title: any, id: any, description: any, Rate: any, image: any, category_id: any) {
  return this.httpClient.post<any>(this.baseUrl + '/update_movie.php',{title,id,description,Rate,image,category_id})
    
}
}
   