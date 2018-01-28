import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], booksearch: string, charactersearch: string, housesearch: string) {

          if (items && items.length){
              return items.filter(item =>{

  				if ((booksearch && item.name.toLowerCase().indexOf(booksearch.toLowerCase()) === -1)){
                      return false;
                  }

          if ((charactersearch && item.name.toLowerCase().indexOf(charactersearch.toLowerCase()) === -1)){
                              return false;
                      }
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
