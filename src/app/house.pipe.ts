import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'housepipe'
})
export class HousePipe implements PipeTransform {

  transform(items: any[], housesearch: string) {

          if (items && items.length){
              return items.filter(item =>{

  		    if ((housesearch && item.name.toLowerCase().indexOf(housesearch.toLowerCase()) === -1)){
                                  return false;
                              }



                  return true;
             })
          }
          else{
              return items;
          }
  }

}
