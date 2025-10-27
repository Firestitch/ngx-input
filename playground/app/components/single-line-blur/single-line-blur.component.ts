import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
    selector: 'single-line-blur',
    templateUrl: './single-line-blur.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [MatFormField, MatInput],
})
export class SingleLineBlurComponent {

  public changeOnBlur(value) {
    alert(`Change on Blur: ${value}`);
  }

}
