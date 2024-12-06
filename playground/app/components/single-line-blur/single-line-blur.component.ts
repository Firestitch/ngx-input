import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'single-line-blur',
  templateUrl: './single-line-blur.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleLineBlurComponent {

  public changeOnBlur(value) {
    alert(`Change on Blur: ${value}`);
  }

}
