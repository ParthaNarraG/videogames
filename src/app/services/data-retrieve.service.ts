import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment as env } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})



export class DataRetrieveService {

  searchParam = new BehaviorSubject<string>("");
  fullGameArray = new BehaviorSubject<Array<Object>>([]);

  constructor(private http: HttpClient) {

  }

  getGameDetails() {
    let params: any;
    this.searchParam.subscribe((data) => {
      if (data !== "") {
        params = new HttpParams().set("search", data)
      }
    })
    return new Promise((resolve, reject) => {
      this.http.get(`${env.webUrl}?`, {
        params: params
      })
        .subscribe(resolve, reject);
    })
  }

  getSingleGameDetails(id: string) {
    const gameInfo=
      this.http.get(`${env.webUrl}/${id}`)
    
    const gameTrailers=
      this.http.get(`${env.webUrl}/${id}/movies`)
    
    const gamescreenShots=
      this.http.get(`${env.webUrl}/${id}/screenshots`)
    
   return forkJoin({
      gameInfo:gameInfo,
      trailers:gameTrailers,
      screenshots:gamescreenShots
    }).pipe(map(function(response){
      return {
        ...response
      }
    }))
  }
}
