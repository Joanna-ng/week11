import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router'; //imported routing module to listen to all the requests

import { AppComponent } from './app.component';
import { DatabaseService } from "./database.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { ListactorsComponent } from './listactors/listactors.component';
import { AddactorComponent } from './addactor/addactor.component';
import { UpdateactorComponent } from './updateactor/updateactor.component';
import { DeleteactorComponent } from './deleteactor/deleteactor.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { DeletemovieComponent } from './deletemovie/deletemovie.component';
import { ListmoviesComponent } from './listmovies/listmovies.component';
import { AddActorToMovieComponent } from './add-actor-to-movie/add-actor-to-movie.component';

const appRoutes: Routes = [ //need to build a routing table to pass to the module, so that they know which component to load
  { path: "listactors", component: ListactorsComponent },
  { path: "listmovies", component: ListmoviesComponent },
  { path: "addactor", component: AddactorComponent },
  { path: "addmovie", component: AddmovieComponent },
  { path: "updateactor", component: UpdateactorComponent },
  { path: "deleteactor", component: DeleteactorComponent },
  { path: "deletemovie", component: DeletemovieComponent },
  { path: "actormovie", component: AddActorToMovieComponent },
  { path: "", redirectTo: "/listactors", pathMatch: "full" },
  //{ path: "**", component: ListactorsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListactorsComponent,
    AddactorComponent,
    UpdateactorComponent,
    DeleteactorComponent,
    AddmovieComponent,
    DeletemovieComponent,
    ListmoviesComponent,
    AddActorToMovieComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule 
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
