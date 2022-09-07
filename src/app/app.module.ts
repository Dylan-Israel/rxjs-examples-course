import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { CardComponent } from './components/card/card.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FundamentalsComponent } from './documentation/fundamentals/fundamentals.component';
import { OfTapPipeComponent } from './documentation/fundamentals/of-tap-pipe/of-tap-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ToolbarComponent,
    FundamentalsComponent,
    OfTapPipeComponent
  ],
  exports: [CardComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
