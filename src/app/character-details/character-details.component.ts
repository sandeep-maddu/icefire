import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

    @Input() character;
    @Output() changeInBook = new EventEmitter();
    @Output() changeInHouse = new EventEmitter();
    @Output() changeInCharacter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelectBook(book:any) {
this.changeInBook.emit(book);
  }

  onSelectHouse(house:any) {
this.changeInHouse.emit(house);
  }

  onSelectCharacter(character:any) {
this.changeInCharacter.emit(character);
  }

}
