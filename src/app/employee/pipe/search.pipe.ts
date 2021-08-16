import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../employee.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchTerm: any): any {
    return value.filter(function(search:Employee){
        //if(search.enabled == true){
        return search.fname.toLowerCase().includes(searchTerm.toLowerCase());
    })
  }
}
