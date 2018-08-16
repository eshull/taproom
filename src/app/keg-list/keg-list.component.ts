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
    return "ipaClass";
  } else if (currentKeg.type == 'Stout'){
    return "stoutClass";
  } else {
    return "brownClass";
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
  if(kegToSell.volumeByPint >0){
    kegToSell.volumeByPint --;
  }
}

sellButtonGrowlerClicked(kegToSell: Keg){
  if(kegToSell.volumeByPint >0){
    kegToSell.volumeByPint -=2;
  }
}

sellButtonLargerGrowlerClicked(kegToSell: Keg){
  if(kegToSell.volumeByPint >0){
    kegToSell.volumeByPint -=4;
  }

}

filterByAlcoholness: string = "allKegs";
filterByType: string;

onChange(optionFromMenu){
  this.filterByAlcoholness = optionFromMenu;
}

}
