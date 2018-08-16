import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './models/keg-model';

@Pipe({
  name: "alcoholness",
  pure: false

})

export class FeaturePipe implements PipeTransform{
  transform(input: Keg[], desiredFilter) {
    const output: Keg[] =[];
    if(desiredFilter === "highAlcohol"){
      for(let i=0; i<input.length; i++){
        if(input[i].alcoholCnt > 5){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredFilter === "highPrice") {
      for(let i=0; i<input.length; i++){
        if(input[i].price > 5){
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }


  }
}
