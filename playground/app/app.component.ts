import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from '../environments/environment';
import { FsExampleModule } from '@firestitch/example';
import { SingleLineComponent } from './components/single-line/single-line.component';
import { SingleLineHintComponent } from './components/single-line-hint/single-line-hint.component';
import { SingleLineIconComponent } from './components/single-line-icon/single-line-icon.component';
import { SingleLinePreSuffixComponent } from './components/single-line-pre-suffix/single-line-pre-suffix.component';
import { SingleLineDisabledComponent } from './components/single-line-disabled/single-line-disabled.component';
import { SingleLineDebounceComponent } from './components/single-line-debounce/single-line-debounce.component';
import { SingleLineMaxLengthComponent } from './components/single-line-maxlength/single-line-maxlength.component';
import { MultilineComponent } from './components/multiline/multiline.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        FsExampleModule,
        SingleLineComponent,
        SingleLineHintComponent,
        SingleLineIconComponent,
        SingleLinePreSuffixComponent,
        SingleLineDisabledComponent,
        SingleLineDebounceComponent,
        SingleLineMaxLengthComponent,
        MultilineComponent,
    ],
})
export class AppComponent {

  public config = environment;
  
}
