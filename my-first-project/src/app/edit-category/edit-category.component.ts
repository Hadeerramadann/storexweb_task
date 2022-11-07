import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import {Router,ActivatedRoute } from '@angular/router';
import {CategoryServiceService } from '../category-service.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  editForm:any;
  catigories:any;
  catigory_id:any;


  constructor(
    private formBuilder: FormBuilder,
    private categoryServiceService:CategoryServiceService,
    private router:Router,
    private url:ActivatedRoute
  ) {
    this.editForm = this.formBuilder.group({
      titel: ['', Validators.required],
       id:[]
      });
   }
 
  ngOnInit(): void {
    this.catigory_id = this.url.snapshot.params['id'];
    // console.log( this.catigory_id );
    this.categoryServiceService.get_single_catigory(this.catigory_id ).subscribe(
      (data:any)=>{
      // console.log(data.data);
      this.editForm.patchValue(data.data);
      });
  }
  onEdit()
  {
   
  this.categoryServiceService.edit_catigory(this.editForm.value.titel,this.editForm.value.id).subscribe(
     data => {
        
        this.router.navigate(['list_catigories']);
    },error =>{}
    )
    ;
  }
}
