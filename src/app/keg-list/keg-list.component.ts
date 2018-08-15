import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg-model'

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})

export class KegListComponent  {
  @Input() childKegList: Keg[];

  kegToShow = null;

  showKeg(clickedKeg){
  if(this.kegToShow == clickedKeg){
    this.kegToShow = null;
  } else {
    this.kegToShow = clickedKeg;
  }
}

typeColor(currentKeg) {
  if (currentKeg.type == 'ipa') {
    return "bg-success";
  } else if (currentKeg.type == 'stout'){
    return "bg-warning";
  } else {
    return "bg-info";
  }
}




}
