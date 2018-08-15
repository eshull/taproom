import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TapkegComponent } from './tapkeg/tapkeg.component';
import { KegListComponent } from './keg-list/keg-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TapkegComponent,
    KegListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
