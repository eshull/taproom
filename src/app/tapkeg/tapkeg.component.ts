import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg-model';

@Component({
  selector: 'app-tapkeg',
  templateUrl: './tapkeg.component.html',
  styleUrls: ['./tapkeg.component.css']
})
export class TapkegComponent  {
 @Output() sendKeg = new EventEmitter();

  submitForm(name: string, brand: string, type: string, price: string, alcoholCnt: string) {
    let newKeg: Keg = new Keg(name, brand, type, parseInt(price), parseInt(alcoholCnt));
    console.log(newKeg.type)
    this.sendKeg.emit(newKeg);
  }

}
