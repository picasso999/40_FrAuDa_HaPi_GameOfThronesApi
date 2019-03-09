import { Component, OnInit } from '@angular/core';
import { GotHttpService } from '../got-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.css'],
  providers:[
    Location
  ]
})
export class CharacterInfoComponent implements OnInit {
  public myId;
  public cardObj;
  constructor(public location:Location,public _route:ActivatedRoute,public router:Router,public gotHttpService:GotHttpService) { }
  public goBack=():any=>{
    this.location.back();
  }
  public getSingleCharacter = () :any =>{
    return this.cardObj.find(res=>res.name==this.myId)
  }
  ngOnInit() {
    this.myId=this._route.snapshot.paramMap.get('id');
    this.gotHttpService.getAllCharacters().subscribe(res=>this.cardObj=res);
  }
  

}
