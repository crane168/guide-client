import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Guide } from '../guide';

@Component({
  selector: 'guide-client-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations:[
    trigger('guideState',[
      state('inactive',style({
        display:'block'
      })),
      state('active',style({
        display: 'none'
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
  ceng_display : string;
  circle_display: string;
  loginState:string = 'inactive';
  constructor(private http : HttpClient) {
        this.ceng_display = 'block';
        this.circle_display = 'none';
  }

  ngOnInit() {
    this.http.get("../../assets/data.json")
      .subscribe(res=>{
        console.log(typeof res)
        this.hotTopic=res.hotTopic})
    this.http.get("../../assets/data.json")
      .subscribe(res=>{this.experience=res.experience})
    this.http.get("../../assets/data.json")
      .subscribe(res=>{this.route=res.route})

  }
  toogleState(state:boolean){
    this.loginState= state ? 'active' :'inactive'
    this.circle_display= state ? 'block' :'none'
    this.ceng_display= state ? 'none' :'block'
  }

}
