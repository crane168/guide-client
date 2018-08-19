import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class Guide {

  constructor(
              public state1='active',
              public state2='inactive',
              public chinese:string,
              public english:string
             ) { }
  toggleState () {
    this.state1=this.state1==='active' ? 'inactive' : 'active'
    this.state2=this.state2==='inactive' ? 'active' : 'inactive'
  }
}
