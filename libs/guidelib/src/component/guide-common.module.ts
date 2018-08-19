import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './common/header.component';

@NgModule({
  imports: [
    CommonModule,
    HeaderComponent
  ],
  declarations: [HeaderComponent],
  exports:[
    HeaderComponent
  ]
})
export class GuideCommonModule { }
