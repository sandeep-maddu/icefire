import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {BookDetailsComponent} from '../book-details/book-details.component';
import {CharacterDetailsComponent} from '../character-details/character-details.component';
import {HouseDetailsComponent} from '../house-details/house-details.component';




@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  bookslist;characterslist;houseslist;selectedBook;selectedCharacter;selectedHouse;
  character;

  constructor(private dataService:DataService) { }

  ngOnInit() {

    this.getBooksList();
    this.getCharactersList();
    this.getHousesList();

  }

  getBooksList() {

  this.dataService.getBooks().subscribe(book => this.bookslist = book);


   }

   getCharactersList() {

this.dataService.getCharacters().subscribe(char => this.characterslist = char);

// this.dataService.getCharacters().subscribe(
//
// data=>this.temp=data[0].json());
//
//
// }
     //this.dataService.getCharByPage(i).subscribe(data => this.characterslist.concat(data));
}


    getHousesList() {
this.dataService.getHouses().subscribe(house => this.houseslist = house);


     }

onSelectBook(book) {
  this.selectedBook=book;
  this.selectedCharacter=null;
    this.selectedHouse=null;
}



onSelectCharacter(character) {
  this.selectedCharacter=character;
  this.selectedBook=null;
  this.selectedHouse=null;

  //console.log(character);
}

changedCharacter(event:any) {
  let id=event.substring(event.lastIndexOf("/")+1);
  if(id) {

   this.dataService.getACharacter(id).subscribe(char => {this.onSelectCharacter(char)});

 }
}

changedBook(event:any) {

  let id=event.substring(event.lastIndexOf("/")+1);
  if(id) {
  this.dataService.getABook(id).subscribe(book => {this.onSelectBook(book)});
}
}

changedHouse(event:any) {

  let id=event.substring(event.lastIndexOf("/")+1);
  if(id) {
  this.dataService.getAHouse(id).subscribe(house => {this.onSelectHouse(house)});
}
}



onSelectHouse(house) {
  this.selectedHouse=house;
  this.selectedBook=null;
  this.selectedCharacter=null;
}

}
