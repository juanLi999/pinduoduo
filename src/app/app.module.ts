import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScrollableTabComponentComponent } from './components/scrollable-tab-component/scrollable-tab-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrollableTabComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
