import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import {Router,ActivatedRoute } from '@angular/router';
import {MoviesService } from '../movies.service';
import { movies } from '../movies';
import { catigories } from '../catigories';
import {CategoryServiceService } from '../category-service.service';

@Component({
  selector: 'app-edit-movies',
  templateUrl: './edit-movies.component.html',
  styleUrls: ['./edit-movies.component.css']
})
export class EditMoviesComponent implements OnInit {
  catigories:any;
  editForm:any;
  movies:any;
  movie_id:any;

  constructor(
    private formBuilder: FormBuilder,
      private  moviesService:MoviesService,
      private router:Router,
      private CategoryServiceService:CategoryServiceService,
      private url:ActivatedRoute
  ) {
    this.editForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      Rate: ['', Validators.required],
      image: ['', Validators.required],
      category_id: ['', Validators.required],
      id:[]
   
      });
   }

  ngOnInit(): void {
    this.CategoryServiceService.getcatigory().subscribe(
      (data:any)=>{
      
      this.catigories=data.data;
      });
      this.movie_id = this.url.snapshot.params['id'];
    
    this.moviesService.get_single_movie(this.movie_id ).subscribe(
      (data:any)=>{
      
      this.editForm.patchValue(data.data);
      });
  }
  onEdit()
  {
   
  this.moviesService.edit_movie(
    this.editForm.value.title,
    this.editForm.value.id,
    this.editForm.value.description,
    this.editForm.value.Rate,
    this.editForm.value.image,
    this.editForm.value.category_id
    ).subscribe(
     data => {
        
        this.router.navigate(['list_movies']);
    },error =>{}
    )
    ;
  }
}
