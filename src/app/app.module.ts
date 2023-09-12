import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SurvivorsComponent } from './survivors/survivors.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [AppComponent, SurvivorsComponent, SearchComponent],
  imports: [BrowserModule, NgSelectModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
