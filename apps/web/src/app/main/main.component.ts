import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Guide } from '../guide.service';

@Component({
  selector: 'guide-client-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations:[
    trigger('guideState1',[
      state('inactive',style({
        display:'none'
      })),
      state('active',style({
        display: 'block'
      })),
      transition('inactive=>active',animate('100ms ease-in')),
      transition('active=>inactive',animate('100ms ease-out'))
    ]),
    trigger('guideState2',[
      state('inactive',style({
        display:'none',
        transform:'scale(1)'
      })),
      state('active',style({
        display: 'block',
        transform:'scale(1.1)'
      })),
      transition('inactive=>active',animate('100ms ease-in')),
      transition('active=>inactive',animate('100ms ease-out'))
    ])
  ]
})
export class MainComponent implements OnInit {
  hotTopic:Guide[];
  experience:Guide[];
  route:Guide[];
  ceng_display:boolean;
  circle_display:boolean;
  constructor(private http:HttpClient) {
        this.ceng_display = true;
        this.circle_display = false;
  }

  ngOnInit() {
    this.http.get <Guide[]>("http://localhost:3000/hotTopic")
      .subscribe(res=>{this.hotTopic=res})
    this.http.get<Guide[]>("http://localhost:3000/experience")
      .subscribe(res=>{this.experience=res})
    this.http.get<Guide[]>("http://localhost:3000/route")
      .subscribe(res=>{this.route=res})

  }

}
