import { Component, OnInit } from '@angular/core';
import {MoviesService } from '../movies.service';
import { movies } from '../movies';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {
  movies:any;
  
  constructor(private moviesService:MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getmovies().subscribe(
      (data:any)=>{
      this.movies=data.data;
    
      });
  }
  deletemovie(movie:any){
  
    
    this.moviesService.deletemovie(movie.id).subscribe(
      (data:any)=>{
        //  console.log(movie.id);
       
        this.movies = this.movies.filter((u:any)=>u !== movie);
      }
     
      );
  }
}
 