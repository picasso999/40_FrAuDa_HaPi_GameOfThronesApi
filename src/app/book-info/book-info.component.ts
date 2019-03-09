import { Component, OnInit } from '@angular/core';
import { GotHttpService } from '../got-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css'],
  providers:[
    Location
  ]
})
export class BookInfoComponent implements OnInit {
  public myId;
  public cardObj;
  constructor(public location:Location,public _route:ActivatedRoute, public router:Router, public gotHttpService:GotHttpService) { }
  public goBack=():any=>{
    this.location.back();
  }
  ngOnInit() {
    this.myId=this._route.snapshot.paramMap.get('id');
    this.gotHttpService.getAllBooks().subscribe(
      res=>this.cardObj=res
    )
  }

}
