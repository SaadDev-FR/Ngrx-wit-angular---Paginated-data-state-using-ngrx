import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {TodoService} from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { bookReducer } from '.././app/reducers/book.reducer';
import { BookEffects } from '.././app/effectts/book.effect';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    StoreModule.forRoot({ books: bookReducer }), // Register the book reducer
    EffectsModule.forRoot([BookEffects]) // Register the book effects
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
