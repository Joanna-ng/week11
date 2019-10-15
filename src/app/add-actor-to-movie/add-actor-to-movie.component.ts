import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-add-actor-to-movie',
  templateUrl: './add-actor-to-movie.component.html',
  styleUrls: ['./add-actor-to-movie.component.css']
})
export class AddActorToMovieComponent implements OnInit {
  movieTitle: string = "";
  fullName: string = "Bob";
  actorsDB: any[] = [];
  moviesDB: any[] = [];
  

  constructor(private dbService: DatabaseService, private router: Router) { }
  ngOnInit() {
    console.log("Hi From addactortomovie ngIOnit");
    this.dbService.getActors().subscribe((data: any[]) => {
      this.actorsDB = data;
    });
    this.dbService.getMovies().subscribe((data: any[]) => {
      this.moviesDB = data;
    });
  }

  onAddActor() {
    //let obj = { title: this.movieTitle, actor: this.fullName };
    //this.dbService.addMovie(fullName).subscribe();
    console.log("this is " + this.fullName);
    this.dbService.addActor(this.movieTitle, this.fullName).subscribe(result => {
      //this.router.navigate(["/listmovies"]);
    });
  }

}
