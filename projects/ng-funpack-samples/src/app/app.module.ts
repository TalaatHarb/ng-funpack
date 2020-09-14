import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgFunpackComponentsModule } from 'ng-funpack-components';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgFunpackComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
