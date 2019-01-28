import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
  ],
})
export class FsInputModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsInputModule,
      // providers: [FsComponentService]
    };
  }
}
