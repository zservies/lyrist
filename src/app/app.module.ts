import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component';

// Manually imported:
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { CreateLyricsComponent } from './create-lyrics/create-lyrics.component';
import { FormsModule } from '@angular/forms';
import { BrowseLyricsComponent } from './browse-lyrics/browse-lyrics.component';
import { AboutComponent } from './about/about.component';
import { CategoriesLyricsComponent } from './categories-lyrics/categories-lyrics.component';
import { HttpClientModule } from '@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    CreateLyricsComponent,
    BrowseLyricsComponent,
    AboutComponent,
    CategoriesLyricsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
