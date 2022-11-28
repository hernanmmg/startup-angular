import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BolsiyoService } from 'src/services/bolsiyo.service';

import { AppRoutingModule } from './app-route';
import { AppComponent } from './components/app-component/app.component';
import { AppBolsiyoComponent } from './components/app-bolsiyo/bolsiyo.component';

@NgModule({
  declarations: [
    AppComponent,
    AppBolsiyoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BolsiyoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
