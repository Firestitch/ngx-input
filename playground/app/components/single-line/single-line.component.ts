import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'single-line',
  templateUrl: './single-line.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleLineComponent {
}
