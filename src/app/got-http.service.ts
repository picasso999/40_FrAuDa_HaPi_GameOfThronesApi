import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
@Injectable({
  providedIn: 'root'
})
export class GotHttpService {
  public baseUrl:string='https://www.anapioficeandfire.com/api/';
  constructor(private _http:HttpClient) { }
  public getAllBooks=():any=>{
    return this._http.get(this.baseUrl+"/books");
  }
  public getAllCharacters=():any=>{
    let characters = this._http.get(this.baseUrl+"/characters?page=1&pageSize=10000");
    return characters
  }
  public getAllHouses=():any=>{
    return this._http.get(this.baseUrl+"/houses");
  }
}
