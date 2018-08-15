import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { TapkegComponent } from './tapkeg/tapkeg.component';
import { KegListComponent } from './keg-list/keg-list.component';
import { EditKegComponent } from './edit-keg/edit-keg.component';
import { SellPintComponent } from './sell-pint/sell-pint.component';


@NgModule({
  declarations: [
    AppComponent,
    TapkegComponent,
    KegListComponent,
    EditKegComponent,
    SellPintComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
