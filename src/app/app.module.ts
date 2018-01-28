import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
//import { NgProgressModule } from 'ng2-progressbar';
//import { Ng2OrderModule } from 'ng2-order-pipe';
//import {PrettyJsonModule, SafeJsonPipe} from 'angular2-prettyjson';
//import {JsonPipe} from '@angular/common';


import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { CharactersComponent } from './characters/characters.component';
import { HousesComponent } from './houses/houses.component';
import { QueryComponent } from './query/query.component';
import { DetailsComponent } from './details/details.component';
import { DataService } from './data.service';
import { BookPipe } from './book.pipe';
import { CharacterPipe } from './character.pipe';
import { HousePipe } from './house.pipe';
import { FilterPipe } from './filter.pipe';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { HouseDetailsComponent } from './house-details/house-details.component';
import { SortPipe } from './sort.pipe';
import { NotblankPipe } from './notblank.pipe';
import { ExtractidPipe } from './extractid.pipe';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    CharactersComponent,
    HousesComponent,
    QueryComponent,
    DetailsComponent,
    BookPipe,
    CharacterPipe,
    HousePipe,
    FilterPipe,
    BookDetailsComponent,
    CharacterDetailsComponent,
    HouseDetailsComponent,
    SortPipe,
    NotblankPipe,
    ExtractidPipe
  ],
  imports: [
    BrowserModule, HttpModule, HttpClientModule,FormsModule,CommonModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
