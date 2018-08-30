import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { DetailsComponent } from './details/details.component';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatChipsModule} from '@angular/material/chips';

import {
  MatCardModule,
  MatCheckboxModule,
  MatInputModule,
  MatNativeDateModule,
  MatSelectModule
} from "@angular/material";
import {MatSidenavModule} from '@angular/material/sidenav';

import { GuideCommonModule } from "@ngx3-guidelib";
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [AppComponent, MainComponent, DetailsComponent, TableComponent],
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
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
