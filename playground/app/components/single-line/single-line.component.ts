import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
    selector: 'single-line',
    templateUrl: './single-line.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [MatFormField, MatInput],
})
export class SingleLineComponent {
}
