import { Component, OnInit } from '@angular/core';
import
@Component({
  selector: 'guide-client-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   imgurl:string = "../assets/dengpao.png";
  constructor() { }

  ngOnInit() {
  }

}
