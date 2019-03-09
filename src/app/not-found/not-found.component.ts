import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
  providers:[ Location ]
})
export class NotFoundComponent implements OnInit {

  constructor(public location:Location) { }
  public goBack=():any=>{
    this.location.back();
  }
  ngOnInit() {
  }

}
