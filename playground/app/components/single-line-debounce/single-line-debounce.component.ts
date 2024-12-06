import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'single-line-debounce',
  templateUrl: './single-line-debounce.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleLineDebounceComponent {
  
  public debounceValue = null;
  public value = null;

  public change(e) {
    this.debounceValue = e;
  }
}
