import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LuckyComponent } from './lucky/lucky.component';
import { ReallyComponent } from './really/really.component';

@NgModule({
  declarations: [
    AppComponent,
    LuckyComponent,
    ReallyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
