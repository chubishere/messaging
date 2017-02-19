import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { MessageThreadComponent }  from './app.message-thread';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent,
    MessageThreadComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

