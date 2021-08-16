import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderpipe'
})
export class GenderpipePipe implements PipeTransform {

  transform(gender: string): any {
    if(gender === "male")
    {
        gender = "M"
    }
    else{
      gender = "F"
    }

    return gender;
  }

}
