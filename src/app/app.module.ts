import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LangPanelComponent } from './lang-panel/lang-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LangPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
