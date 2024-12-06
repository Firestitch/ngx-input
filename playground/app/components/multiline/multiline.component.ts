import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'multiline',
  templateUrl: './multiline.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultilineComponent {
}
