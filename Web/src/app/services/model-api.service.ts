import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ModelApiService {

  private baseURL = "http://localhost:5000/";

  constructor(private http: Http) { }

  knn(jobDescription) {
    var payload = {"job": jobDescription};
    return this.http.post(this.baseURL+"predictionByKNN",payload)
    .pipe(map( (res:any) => res.json() ) );
  }

  nn(jobDescription) {
    var payload = {"job": jobDescription};
    return this.http.post(this.baseURL+"predictionByNN",payload)
    .pipe(map( (res:any) => res.json() ) );
  }

}
