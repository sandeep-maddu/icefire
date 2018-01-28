import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.css']
})
export class HouseDetailsComponent implements OnInit {

    @Input() house;
    @Output() changeInCharacter = new EventEmitter();
    @Output() changeInHouse = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelectCharacter(character:any) {
this.changeInCharacter.emit(character);
}


  onSelectHouse(house:any) {
this.changeInHouse.emit(house);

  }

}
