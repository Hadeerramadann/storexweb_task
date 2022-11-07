import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import {Router } from '@angular/router';
import {CategoryServiceService } from '../category-service.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  addForm:FormGroup;

    constructor(
      private formBuilder: FormBuilder,
      private categoryServiceService:CategoryServiceService,
      private router:Router
    ) {
      this.addForm = this.formBuilder.group({
        titel: ['', Validators.required]
    
        });
    }

    ngOnInit(): void {
    }
    postdata(addForm:any)
    {
      // console.log(addForm.value.titel);
    this.categoryServiceService.add_catigory(
      addForm.value.title
    )
      .pipe(first())
      .subscribe( data => {
          // this.router.navigate(['/dashboard']);
          this.router.navigate(['list_catigories']);
      },error =>{}
      );
    }
}
 