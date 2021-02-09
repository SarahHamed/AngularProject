import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private _HttpClient:HttpClient) { }

  getTrendingAll(pageNumber):Observable<any>
  {
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/all/week?api_key=a12a6f51ae3e123642e5ca01d8b0e5d9&page="+pageNumber)
  }

  getTrendingMovie(pageNumber):Observable<any>
  {
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/movie/week?api_key=a12a6f51ae3e123642e5ca01d8b0e5d9&page="+pageNumber)
  }

  getTrendingTv(pageNumber):Observable<any>
  {
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/tv/week?api_key=a12a6f51ae3e123642e5ca01d8b0e5d9&page="+pageNumber)
  }

  getTrendingPeople(pageNumber):Observable<any>
  {
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/person/week?api_key=a12a6f51ae3e123642e5ca01d8b0e5d9&page="+pageNumber)
  }

  loadMovie(id):Observable<any>
  {
    return this._HttpClient.get("https://api.themoviedb.org/3/movie/"+id+"?api_key=a12a6f51ae3e123642e5ca01d8b0e5d9")
  }
  loadSelectedMedia(id,mediaType):Observable<any>
  {
    return this._HttpClient.get("https://api.themoviedb.org/3/"+mediaType+"/"+id+"?api_key=a12a6f51ae3e123642e5ca01d8b0e5d9")
  }
  loadPerson(id):Observable<any>
  {
    return this._HttpClient.get("https://api.themoviedb.org/3/person/"+id+"?api_key=a12a6f51ae3e123642e5ca01d8b0e5d9")
  }
  loadTV(id):Observable<any>
  {
    return this._HttpClient.get("https://api.themoviedb.org/3/tv/"+id+"?api_key=a12a6f51ae3e123642e5ca01d8b0e5d9")
  }
}
