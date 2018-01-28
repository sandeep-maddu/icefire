import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notblank'
})
export class NotblankPipe implements PipeTransform {

  transform(items) {
        if (items && items.length){
            return items.filter(item =>{

				if (item.name===""){
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
