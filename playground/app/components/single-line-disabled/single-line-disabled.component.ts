import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
    selector: 'single-line-disabled',
    templateUrl: './single-line-disabled.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        MatFormField,
        MatLabel,
        MatInput,
    ],
})
export class SingleLineDisabledComponent {
}
