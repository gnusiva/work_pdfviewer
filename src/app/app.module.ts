import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewPdfComponent } from './view-pdf/view-pdf.component';
import { LaunchPdfComponent } from './launch-pdf/launch-pdf.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewPdfComponent,
    LaunchPdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
