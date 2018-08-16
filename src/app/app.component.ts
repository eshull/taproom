import { Component } from '@angular/core';
import { Keg } from './models/keg-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Thirsty';

  masterKegList: Keg[] = [
     new Keg('Organic IPA', 'Hop Works', 'IPA', 5, 6.6),
     new Keg('Gear Up', 'Hop Works', 'IPA', 7, 6.2),
     new Keg('Imperial', 'DrinkBeer', 'IPA', 5, 4),
     new Keg('Survival Stout', 'Hop Works', 'Stout', 5, 8),
     new Keg('Old Rasputin', 'North Coast Brewing', 'Stout', 5, 8),
     new Keg('Brown Trout', 'Lady of the Lake', 'Brown', 5, 4),
     new Keg('Strong', 'DrunkBeer', 'Stout', 5, 8),
  ];

  selectedKeg = null;

  editKeg(clickedKeg){
    this.selectedKeg = clickedKeg;
  }

  addKeg(newKeg: Keg){
    this.masterKegList.push(newKeg);
  }

  finishedEdit(){
    this.selectedKeg = null;
  }

  sellPint(clickedKeg){
    this.selectedKeg = clickedKeg;
    this.selectedKeg.volumeByPint -= 1;
  }

}
