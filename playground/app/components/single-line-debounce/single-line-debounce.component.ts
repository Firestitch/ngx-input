import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatFormField, MatLabel, MatHint } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { FsCommonModule } from '@firestitch/common';


@Component({
    selector: 'single-line-debounce',
    templateUrl: './single-line-debounce.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        MatFormField,
        MatLabel,
        MatInput,
        FormsModule,
        FsCommonModule,
        MatHint,
    ],
})
export class SingleLineDebounceComponent {
  
  public debounceValue = null;
  public value = null;

  public change(e) {
    this.debounceValue = e;
  }
}
