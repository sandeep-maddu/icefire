import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
//import { Observable } from 'rxjs/Observable';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/observable/forkJoin';
//import {NgProgressService} from "ng2-progressbar";



@Injectable()
export class DataService {

characters;

  constructor(private http: Http) { }

	getBooks() {
//let pages:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pages=Array.from({length: 2}, (v, k) => k+1); //actual figure - 12

return Observable.forkJoin(pages.map(i => this.http.get('https://www.anapioficeandfire.com/api/books?page=' + i)))
     .map(responses => {
     return [].concat(...responses);
     });

 	}

  getABook(i) {


return this.http.get('https://www.anapioficeandfire.com/api/books/' + i).map(x => x.json() );
  }

	getCharacters() {
  //  this.pService.start();
//let pages:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pages=Array.from({length: 214}, (v, k) => k+1); //actual figure - 2134

   // return Observable.forkJoin(
   //    pages.map(
   //       i => this.http.get('https://www.anapioficeandfire.com/api/characters?page=' + i)
   //         .flatMap(res => res.json())
   //    )
   // );
    return Observable.forkJoin(pages.map(i => this.http.get('https://www.anapioficeandfire.com/api/characters?page=' + i)))
         .map(responses => {
         return [].concat(...responses);
         });

   //return Observable.forkJoin(pages.map(i => this.http.get('https://www.anapioficeandfire.com/api/books?page=' + i)));

//this.pService.done();
 	}


  	getACharacter(i) {


  return this.http.get('https://www.anapioficeandfire.com/api/characters/' + i).map(x => x.json() );
   	}

	getHouses() {
//let pages:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pages=Array.from({length:45 }, (v, k) => k+1); //actual figure - 444

return Observable.forkJoin(pages.map(i => this.http.get('https://www.anapioficeandfire.com/api/houses?page=' + i)))
     .map(responses => {
     return [].concat(...responses);
     });

 	}

  getAHouse(i) {


return this.http.get('https://www.anapioficeandfire.com/api/houses/' + i).map(x => x.json() );
  }

}
