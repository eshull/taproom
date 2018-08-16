import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { FeaturePipe } from './feature.pipe';
import { LowPipe } from './low.pipe';



import { AppComponent } from './app.component';
import { TapkegComponent } from './tapkeg/tapkeg.component';
import { KegListComponent } from './keg-list/keg-list.component';
import { EditKegComponent } from './edit-keg/edit-keg.component';
import { PatronComponent } from './patron/patron.component';
import { EmployeeComponent } from './employee/employee.component';
import { routing } from './app.routing';
import { LowKegComponent } from './low-keg/low-keg.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    TapkegComponent,
    KegListComponent,
    EditKegComponent,
    PatronComponent,
    EmployeeComponent,
    FeaturePipe,
    LowKegComponent,
    LowPipe,
    NavComponent
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
