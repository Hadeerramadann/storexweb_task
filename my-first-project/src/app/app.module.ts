import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResponsiveSidebarComponent } from './responsive-sidebar/responsive-sidebar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatsidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
// import { CategoryServiceComponent } from './category-service/category-service.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { EditMoviesComponent } from './edit-movies/edit-movies.component';
// import {AppRoutingModule}from'';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    DashboardComponent,
    LoginComponent,
    ResponsiveSidebarComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    // CategoryServiceComponent,
    ListCategoryComponent,
    ListMoviesComponent,
    AddMoviesComponent,
    EditMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    MatToolbarModule,
    // MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
