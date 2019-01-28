import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


@Component({
  selector: 'single-line-debounce',
  templateUrl: 'single-line-debounce.component.html'
})
export class SingleLineDebounceComponent implements OnInit {

  debounceChange$ = new Subject<string>();
  debounceValue: String = '';

  constructor() {  }

  ngOnInit() {
    this.debounceChange$
      .pipe(
        debounceTime(600),
        distinctUntilChanged()
      )
      .subscribe((value) => {
        this.debounceValue = value;
      });
  }
}
