import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './All_Used/navbar/navbar.component';
import { MusicComponent } from './Pages/music/music.component';
import { MovieComponent } from './Pages/movie/movie.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { SeriesComponent } from './Pages/series/series.component';
import { SignInComponent } from './Pages/sign-in/sign-in.component';
import { LogInComponent } from './Pages/log-in/log-in.component';
import { AllTimeSongComponent } from './Pages/all-time-song/all-time-song.component';
import { WillingToListenComponent } from './Pages/willing-to-listen/willing-to-listen.component';
import { LastSongsComponent } from './Pages/last-songs/last-songs.component';
import { LastMoviesComponent } from './Pages/last-movies/last-movies.component';
import { AllTimeMoviesComponent } from './Pages/all-time-movies/all-time-movies.component';
import { WillingToWatchComponent } from './Pages/willing-to-watch/willing-to-watch.component';
import { LastSeriesComponent } from './Pages/last-series/last-series.component';
import { AllTimeSeriesComponent } from './Pages/all-time-series/all-time-series.component';
import { WillingToWatchSeriesComponent } from './Pages/willing-to-watch-series/willing-to-watch-series.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CapitalizeFirstPipe } from './Pipe/pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MusicComponent,
    MovieComponent,
    ProfileComponent,
    SeriesComponent,
    SignInComponent,
    LogInComponent,
    AllTimeSongComponent,
    WillingToListenComponent,
    LastSongsComponent,
    LastMoviesComponent,
    AllTimeMoviesComponent,
    WillingToWatchComponent,
    LastSeriesComponent,
    AllTimeSeriesComponent,
    WillingToWatchSeriesComponent,
    CapitalizeFirstPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
