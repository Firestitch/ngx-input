import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatFormField, MatLabel, MatPrefix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'single-line-icon',
    templateUrl: './single-line-icon.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        MatFormField,
        MatLabel,
        MatInput,
        MatIcon,
        MatPrefix,
    ],
})
export class SingleLineIconComponent {
}
