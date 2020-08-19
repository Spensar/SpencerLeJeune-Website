import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { PhotographyComponent } from './photography/photography.component';
import { FooterComponent } from './footer/footer.component';
import { SoftwareComponent } from './software/software.component';
import { YoutubeComponent } from './youtube/youtube.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'software', component: SoftwareComponent },
  { path: 'photography', component: PhotographyComponent },
  { path: 'youtube', component: YoutubeComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    PhotographyComponent,
    FooterComponent,
    SoftwareComponent,
    YoutubeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
