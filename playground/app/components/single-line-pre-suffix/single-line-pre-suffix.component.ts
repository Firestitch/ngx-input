import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatFormField, MatLabel, MatPrefix, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'single-line-pre-suffix',
    templateUrl: './single-line-pre-suffix.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        MatFormField,
        MatLabel,
        MatPrefix,
        MatInput,
        MatIcon,
        MatSuffix,
    ],
})
export class SingleLinePreSuffixComponent {
}
