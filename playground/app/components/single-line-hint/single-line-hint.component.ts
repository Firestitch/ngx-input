import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatFormField, MatLabel, MatHint } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
    selector: 'single-line-hint',
    templateUrl: './single-line-hint.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        MatFormField,
        MatLabel,
        MatInput,
        MatHint,
    ],
})
export class SingleLineHintComponent {
}
