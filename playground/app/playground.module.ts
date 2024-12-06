import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FsCommonModule } from '@firestitch/common';
import { FsExampleModule } from '@firestitch/example';
import { FsMessageModule } from '@firestitch/message';

import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MultilineComponent, SingleLineBlurComponent, SingleLineComponent, SingleLineDebounceComponent, SingleLineDisabledComponent, SingleLineHintComponent, SingleLineIconComponent, SingleLineMaxLengthComponent, SingleLinePreSuffixComponent } from './components';
import { AppMaterialModule } from './material.module';


@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    FsCommonModule,
    FsExampleModule.forRoot(),
    FsMessageModule.forRoot(),
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
    SingleLinePreSuffixComponent,
  ],
  providers: [
    { 
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, 
      useValue: { floatLabel: 'auto', appearance: 'outline' },
    },
  ],
})
export class PlaygroundModule {
}
