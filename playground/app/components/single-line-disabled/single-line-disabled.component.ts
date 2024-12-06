import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'single-line-disabled',
  templateUrl: './single-line-disabled.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleLineDisabledComponent {
}
