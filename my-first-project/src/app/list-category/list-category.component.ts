import { Component, OnInit } from '@angular/core';
import {CategoryServiceService } from '../category-service.service';
import { catigories } from '../catigories';


@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  catigories:any;
  constructor(private CategoryServiceService:CategoryServiceService) { }

  ngOnInit(): void {
    this.CategoryServiceService.getcatigory().subscribe(
      (data:any)=>{
      // console.log(data);
      this.catigories=data.data;
      });
  }
  
  deletecategories(catigory:any){
    // console.log(catigory.id);
    
    this.CategoryServiceService.deletecategory(catigory.id).subscribe(
      (data:any)=>{
        //  console.log(catigory.id);
       
        this.catigories = this.catigories.filter((u:any)=>u !== catigory);
      }
     
      );
  }
  // deletecategories(student:any){
  //   // console.log(id);
  //   this.CategoryServiceService.deletecategory(student.id).subscribe(data=>{
  //   this.catigories = this.catigories.filter((u: any) => u !== student);
   

  //   })
  //   }
  
}
