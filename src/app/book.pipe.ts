import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookpipe'
})
export class BookPipe implements PipeTransform {

  transform(items: any[], booksearch: string, authorsearch: string) {

          if (items && items.length){
              return items.filter(item =>{

  				if ((booksearch && item.name.toLowerCase().indexOf(booksearch.toLowerCase()) === -1)){
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
