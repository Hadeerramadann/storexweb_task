import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent  } from './login/login.component';
import { GuardGuard } from './guard.guard';
import { ListCategoryComponent } from './list-category/list-category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { EditMoviesComponent } from './edit-movies/edit-movies.component';




const routes: Routes =[

{ path: 'home' , component: HomeComponent },
{ path: 'registration' , component: RegisterComponent },
{ path: 'dashboard' , component: DashboardComponent,canActivate: [GuardGuard] },
{ path: 'login' , component: LoginComponent  },
{ path: 'list_catigories' , component: ListCategoryComponent  },
{ path: 'list_catigories/add_catiegory' , component: AddCategoryComponent  },
{ path: 'list_catigories/edit_category/:id' , component: EditCategoryComponent  },
{ path: 'list_movies' , component: ListMoviesComponent  },
{ path: 'list_movies/add_movies' , component: AddMoviesComponent  },
{ path: 'list_movies/edit_movies/:id' , component: EditMoviesComponent  }




];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
