import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


@Component({
  selector: 'single-line-debounce',
  templateUrl: './single-line-debounce.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleLineDebounceComponent implements OnInit {

  public debounceChange$ = new Subject<string>();
  public debounceValue: String = '';

  public ngOnInit() {
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
