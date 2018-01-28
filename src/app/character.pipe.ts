import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'characterpipe'
})
export class CharacterPipe implements PipeTransform {

  transform(items: any[], charactersearch: string) {

          if (items && items.length){
              return items.filter(item =>{



          if ((charactersearch && item.name.toLowerCase().indexOf(charactersearch.toLowerCase()) === -1)){
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
