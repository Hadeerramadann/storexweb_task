import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import {Router } from '@angular/router';
import {MoviesService } from '../movies.service';
import { movies } from '../movies';
import { catigories } from '../catigories';
import {CategoryServiceService } from '../category-service.service';
 
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-add-movies',
  templateUrl: './add-movies.component.html',
  styleUrls: ['./add-movies.component.css']
})
export class AddMoviesComponent implements OnInit {
  addForm:FormGroup;
  catigories:any;
 
  constructor(
    private formBuilder: FormBuilder,
      private  moviesService:MoviesService,
      private router:Router,
      private CategoryServiceService:CategoryServiceService
  ) {
    this.addForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      Rate: ['', Validators.required],
      image: ['', Validators.required],
      category_id: ['', Validators.required],

   
      });
   }

  ngOnInit(): void {
    this.CategoryServiceService.getcatigory().subscribe(
      (data:any)=>{
      // console.log(data);
      this.catigories=data.data;
      });
  }
  postdata(addForm:any)
    {
     
    this.moviesService.add_movie(
      addForm.value.title,
      addForm.value.description,
      addForm.value.Rate,
      addForm.value.image,
      addForm.value.category_id



    )
      .pipe(first())
      .subscribe( data => {
         
          this.router.navigate(['list_movies']);
      },error =>{}
      );
    }

} 
