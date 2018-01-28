import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(array) {
    array.sort(function(a, b){
     var nameA=a.name.toUpperCase();
     var nameB=b.name.toUpperCase();
     if (nameA < nameB) //sort string ascending
      return -1;
     if (nameA > nameB)
      return 1;
     return 0; //default return value (no sorting)
    });
    return array;
   }

}
