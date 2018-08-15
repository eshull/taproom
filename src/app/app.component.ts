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
     new Keg('DeepBrown', 'BeerBeer', 'Brown', 5, 4),
     new Keg('OhMan', 'BeerMalt', 'IPA', 7, 6),
     new Keg('Imperial', 'DrinkBeer', 'IPA', 5, 4),
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
