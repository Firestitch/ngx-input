import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'single-line-hint',
  templateUrl: './single-line-hint.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleLineHintComponent {
}
