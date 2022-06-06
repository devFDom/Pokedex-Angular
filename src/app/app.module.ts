import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import HttpClientModule to use the API
// Remember to add it to @NgModule imports : too
import {HttpClientModule} from '@angular/common/http';

// Install pagination module
// npm install ngx-pagination --save
// Import NgxPaginationModule to use some pagination
// add it to imports too
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
