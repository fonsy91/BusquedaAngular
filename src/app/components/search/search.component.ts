import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.search.valueChanges
    .pipe(
      debounceTime(300)
    )
    .subscribe(value => this.searchEmitter.emit(value))
    //nos suscribimos a los cambios (valueChanges) y cuando hay un cambio el searchEmitter
    //emite (emit) ese valor  
  }


  search = new FormControl('')

  @Output('search') searchEmitter = new EventEmitter<string>();

}


