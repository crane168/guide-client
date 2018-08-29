import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './/app-routing.module';
import { DetailsComponent } from './details/details.component';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';

import { GuideCommonModule } from "@ngx3-guidelib";

@NgModule({
  declarations: [AppComponent, MainComponent, DetailsComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    GuideCommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
