import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './models/keg-model';

@Pipe({
  name: "low",
  pure: false

})

export class LowPipe implements PipeTransform{
  transform(input: Keg[]) {
    let lowKegArray: Keg[] = []
    for(let i=0; i<input.length; i++) {
      if (input[i].volumeByPint < 20) {
        lowKegArray.push(input[i]);
      }
    }
    return lowKegArray
  }
}
