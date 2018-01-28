import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

    @Input() book;
    @Output() changeInCharacter = new EventEmitter();



  constructor() { }

  ngOnInit() {
  }

  onSelectCharacter(character:any) {
this.changeInCharacter.emit(character);
  }

}
