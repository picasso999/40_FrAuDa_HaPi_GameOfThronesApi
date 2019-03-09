import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GotHttpService } from '../got-http.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-house-info',
  templateUrl: './house-info.component.html',
  styleUrls: ['./house-info.component.css'],
  providers:[
    Location
  ]
})
export class HouseInfoComponent implements OnInit {
  public myId:any;
  public cardObj:any;
  constructor(public location:Location,public gotHttpService:GotHttpService,public _route:ActivatedRoute,public router:Router) { }
  public goBack=():any=>{
    this.location.back();
  }
  ngOnInit() {
    this.myId=this._route.snapshot.paramMap.get('id');
    this.gotHttpService.getAllHouses().subscribe(res=>this.cardObj=res)
  }

}
