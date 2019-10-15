import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};
@Injectable({
  providedIn: "root",
})
export class DatabaseService {
  constructor(private http: HttpClient) {}
  result: any;
  getActors() {
    console.log("getactors has run")
    return this.http.get("/listactors");
  }
  getActor(id: string) {
    let url = "/actors/" + id;
    return this.http.get(url);
  }
  createActor(data) {
    return this.http.post("/actors", data, httpOptions);
  }
  updateActor(id, data) {
    let url = "/actors/" + id;
    return this.http.put(url, data, httpOptions);
  }
  deleteActor(id) {
    let url = "/actors/" + id;
    return this.http.delete(url, httpOptions);
  }


  getMovies() {
    console.log("Get movies has been called");
    return this.http.get("/listmovies");
  }

  createMovie(data) {
    return this.http.post("/movies", data, httpOptions);
  }

  deleteMovie(id) {
    let url = "/movies/" + id;
    return this.http.delete(url, httpOptions);
  }

  deleteBYearMovie(year) {
    let url = "/movies/deleteMany/" + year;
    return this.http.delete(url, httpOptions);
  }

  addActor(movieID, actorID){
    let url = "/movies/" + movieID + "/" + actorID + "/actors";
  }

  addMovie(objM){
    let url = "/actors/" + objM + "/movies";
  }

  getActor2Movies(){
    let url = "actors/movies/";
    return this.http.get(url, httpOptions);
  }
}
