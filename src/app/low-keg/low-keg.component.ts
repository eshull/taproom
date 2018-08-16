import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg-model';


@Component({
  selector: 'app-low-keg',
  templateUrl: './low-keg.component.html',
  styleUrls: ['./low-keg.component.css']
})
export class LowKegComponent {

  @Input() childKegList: Keg[];

  noKegs: boolean = false;

  showLowKeg(){
    if(this.childKegList.length > 0){
      this.noKegs = true;
    }
  }



}
