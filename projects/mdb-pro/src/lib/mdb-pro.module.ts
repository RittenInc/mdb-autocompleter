import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { AutocompleterComponent } from './autocompleter/autocompleter.component';

@NgModule({
  declarations: [AutocompleterComponent],
  imports: [
      CommonModule,
      HttpClientModule,
      MDBBootstrapModulesPro.forRoot(),
  ],
  exports: [
      AutocompleterComponent
  ]
})
export class MdbProModule { }
