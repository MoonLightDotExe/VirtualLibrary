import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibraryComponent } from './library/library.component';
import { HolderComponent } from './holder/holder.component';
import { FeBooksComponent } from './fe-books/fe-books.component';
import { SeBooksComponent } from './se-books/se-books.component';


@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent,
    HolderComponent,
    MainComponent,
    FeBooksComponent,
    SeBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: LibraryComponent},
      {path: 'content', component: MainComponent},
      {path: 'FE', component: FeBooksComponent},
      {path: 'SE', component: SeBooksComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
