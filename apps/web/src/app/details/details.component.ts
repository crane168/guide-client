import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'guide-client-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'duihao',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/duihao.svg'));iconRegistry.addSvgIcon(
      'laji',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/laji.svg'));
  }

  ngOnInit() {
  }

}
