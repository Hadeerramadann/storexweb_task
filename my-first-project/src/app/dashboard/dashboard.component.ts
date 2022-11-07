import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import {Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 auth:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.auth = localStorage.getItem('token');
    if(!this.auth){
   this.router.navigate(['/login']);
}
  }

}
