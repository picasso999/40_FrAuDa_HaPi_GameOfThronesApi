import { Component, OnInit } from '@angular/core';
import { GotHttpService } from '../got-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public books : any;
  public characters : any;
  public houses : any;

  constructor(public gotHttpService:GotHttpService) { }

  ngOnInit() {
    this.gotHttpService.getAllBooks().subscribe(
      res=>this.books=res
    )
    this.gotHttpService.getAllCharacters().subscribe(
      res=>{
        this.characters=res
        this.characters=this.characters.filter((result)=>(result.name!=""&&result.culture!=""))
      }
    )
    this.gotHttpService.getAllHouses().subscribe(
      res=>this.houses=res
    ) 
  }
  public getHouses = ():any=>{
    this.gotHttpService.getAllHouses().subscribe(
      data => { console.log(data) },
      error => {}
    )
  }
  public getCharacters = ():any=>{
    this.gotHttpService.getAllCharacters().subscribe(
      data => { console.log(data) },
      error => {}
    )
  }

}
