import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg-model'

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})

export class KegListComponent  {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();


  kegToShow = null;

  showKeg(clickedKeg){
  if(this.kegToShow == clickedKeg){
    this.kegToShow = null;
  } else {
    this.kegToShow = clickedKeg;
  }
}

typeColor(currentKeg) {
  if (currentKeg.type == 'IPA') {
    return "bg-success";
  } else if (currentKeg.type == 'Stout'){
    return "bg-warning";
  } else {
    return "bg-info";
  }
}

kegLow(currentKeg){
  if (currentKeg.volumeByPint > 80){
    return "bg-success";
  }
  if (currentKeg.volumeByPint >=50 && currentKeg.volumeByPint <=79){
    return "bg-warning";
  }
  if (currentKeg.volumeByPint < 50){
    return "bg-danger";
  }
}

editButtonClicked(kegToEdit: Keg){
  this.clickSender.emit(kegToEdit);
}

sellButtonClicked(kegToSell: Keg){
  kegToSell.volumeByPint --;
}

}
