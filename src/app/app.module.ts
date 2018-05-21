import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LangPanelComponent } from './lang-panel/lang-panel.component';
import { SocialFooterComponent } from './social-footer/social-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LangPanelComponent,
    SocialFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
