import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import {Router } from '@angular/router';
import { ApiService } from '../api.service';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  angForm:FormGroup;
  constructor(
    private fb: FormBuilder,
    private dataService:ApiService,
    private router:Router
    ){
    this.angForm = this.fb.group({
    name: ['', Validators.required],
    birthdate: ['' , Validators.required],
    email: ['', [Validators.required, Validators.minLength(1), Validators.email]],
    password: ['', Validators.required],
    
    });
    }

  ngOnInit(): void {
  }

  postdata(angForm:any)
  {
  this.dataService.userregistration(
      angForm.value.name,
      angForm.value.birthdate,
      angForm.value.email,
      angForm.value.password,
      
  )
    .pipe(first())
    .subscribe( data => {
        // this.router.navigate(['/dashboard']);
        this.router.navigate(['login']);
    },error =>{}
    );
  


}
}
