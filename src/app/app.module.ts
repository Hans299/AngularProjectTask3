import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Tugas2Component } from './pages/tugas2/tugas2.component';
import { StatusTransformPipe } from './pipe/status-transform.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Tugas2Component,
    StatusTransformPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
