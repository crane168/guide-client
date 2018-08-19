import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './/app-routing.module';
import { DetailsComponent } from './details/details.component';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule, MatCheckboxModule, MatInputModule } from '@angular/material';
// import { GuideCommonModule } from '@ngx3-guidelib';

@NgModule({
  declarations: [AppComponent, MainComponent, HeaderComponent, DetailsComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    // GuideCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
