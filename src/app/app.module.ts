import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TableModule } from 'primeng/table';
import { TriStateSwitchComponent } from './tri-state-switch/tri-state-switch.component';


@NgModule({
  declarations: [
    AppComponent,
    TriStateSwitchComponent
  ],
  imports: [
    BrowserModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
