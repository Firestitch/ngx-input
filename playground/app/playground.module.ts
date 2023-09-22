import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FsExampleModule } from '@firestitch/example';
import { FsMessageModule } from '@firestitch/message';

import { AppMaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { SingleLineComponent } from './components';
import { SingleLineHintComponent } from './components';
import { SingleLineIconComponent } from './components';
import { SingleLineDisabledComponent } from './components';
import { SingleLineDebounceComponent } from './components';
import { SingleLineMaxLengthComponent } from './components';
import { SingleLineBlurComponent } from './components';
import { SingleLinePreSuffixComponent } from './components';
import { MultilineComponent } from './components';


@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    FsExampleModule.forRoot(),
    FsMessageModule.forRoot(),
  ],
  entryComponents: [
  ],
  declarations: [
    AppComponent,
    SingleLineComponent,
    SingleLineHintComponent,
    SingleLineIconComponent,
    SingleLineDisabledComponent,
    SingleLineDebounceComponent,
    SingleLineMaxLengthComponent,
    SingleLineBlurComponent,
    MultilineComponent,
    SingleLinePreSuffixComponent
  ],
  providers: [
  ],
})
export class PlaygroundModule {
}
