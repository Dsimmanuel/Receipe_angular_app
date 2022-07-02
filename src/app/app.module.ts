import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { SearchReceipeComponent } from './search-receipe/search-receipe.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRecipeComponent,
    SearchReceipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
