import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'guide-client-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
   items:Celan[];
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    this.items=[{
      name:"基本信息",
      tubiao:"duihao",
      shanchu:'laji'
    },
    {
      name:"详情描述",
      tubiao:"duihao",
      shanchu:"laji"
    },{
      name:"报价",
      tubiao:"duihao",
      shanchu:"laji"
    },
  ]
    iconRegistry.addSvgIcon(
      'duihao',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/duihao.svg'));iconRegistry.addSvgIcon(
      'laji',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/laji.svg'));
  }

  ngOnInit() {
  }
  deleteItem(index:number){
    this.items.splice(index,1)
  }

}
export interface Celan {
      name:string;
      tubiao:string;
      shanchu:string

}
