import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extractid'
})
export class ExtractidPipe implements PipeTransform {

  transform(value:string):string {
            
             if (!value) return value;

            return (value.substring(value.lastIndexOf("/")+1));

    };

}
