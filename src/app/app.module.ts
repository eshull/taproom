import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";



import { AppComponent } from './app.component';
import { TapkegComponent } from './tapkeg/tapkeg.component';
import { KegListComponent } from './keg-list/keg-list.component';
import { EditKegComponent } from './edit-keg/edit-keg.component';
import { PatronComponent } from './patron/patron.component';
import { EmployeeComponent } from './employee/employee.component';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    TapkegComponent,
    KegListComponent,
    EditKegComponent,
    PatronComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
