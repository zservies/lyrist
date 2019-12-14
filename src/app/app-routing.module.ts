import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateLyricsComponent } from './create-lyrics/create-lyrics.component';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { BrowseLyricsComponent } from './browse-lyrics/browse-lyrics.component';
import { AboutComponent } from './about/about.component';
import { CategoriesLyricsComponent } from './categories-lyrics/categories-lyrics.component';


const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'create', component: CreateLyricsComponent},
  {path: 'browse', component: BrowseLyricsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'categories', component: CategoriesLyricsComponent},
  {path: '**', component: LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
