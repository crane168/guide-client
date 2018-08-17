import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { trigger } from "@angular/animations";

@Component({
  selector: 'guide-client-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations:[
    trigger('guideState',[
      state('inactive',style({}))
    ])
  ]
})
export class MainComponent implements OnInit {
  hotTopic:any;
  experience:any;
  route:any;
  ceng_display:boolean;
  circle_display:boolean;
  constructor(private http:HttpClient) {
        this.ceng_display = true;
        this.circle_display = false;
  }

  ngOnInit() {
    this.http.get("http://localhost:3000/hotTopic")
      .subscribe(res=>{this.hotTopic=res})
    this.http.get("http://localhost:3000/experience")
      .subscribe(res=>{this.experience=res})
    this.http.get("http://localhost:3000/route")
      .subscribe(res=>{this.route=res})

  }

}
