import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: 'log-in', loadChildren: () => import('../app/Modules/log-in/log-in.module').then(m => m.LogInModule)},
  {path: 'home', loadChildren: () => import('../app/Modules/home/home.module').then(m => m.HomeModule)},
  {path: 'music', loadChildren: () => import('../../src/app/Modules/music/music.module').then (m => m.MusicModule)},
  {path:'movie', loadChildren: () => import('../../src/app/Modules/movie/movie.module').then (m => m.MovieModule)},
  {path: 'series', loadChildren: () => import('../../src/app/Modules/series/series.module').then (m => m.SeriesModule)},
  {path: 'profile', loadChildren: () => import('../../src/app/Modules/profile/profile.module').then (m => m.ProfileModule)},
  {path: 'last-song', loadChildren: () => import('../../src/app/Modules/last-song/last-song.module').then (m => m.LastSongModule)},
  {path: 'all-time-song', loadChildren: () => import('../../src/app/Modules/all-time-song/all-time-song.module').then (m => m.AllTimeSongModule)},
  {path: 'willing-to-listen', loadChildren: () => import('../../src/app/Modules/willing-to-listen/willing-to-listen.module').then (m => m.WillingToListenModule)},
  {path: 'last-movies', loadChildren: () => import('../../src/app/Modules/last-movies/last-movies.module').then (m => m.LastMoviesModule)},
  {path: 'all-time-movies', loadChildren: () => import('../../src/app/Modules/all-time-movies/all-time-movies.module').then (m => m.AllTimeMoviesModule)},
  {path: 'willing-to-watch', loadChildren: () => import('../../src/app/Modules/willing-to-watch/willing-to-watch.module').then (m => m.WillingToWatchModule)},
  {path: 'last-series', loadChildren: () => import('../../src/app/Modules/last-series/last-series.module').then (m => m.LastSeriesModule)},
  {path: 'all-time-series', loadChildren: () => import('../../src/app/Modules/all-time-series/all-time-series.module').then (m => m.AllTimeSeriesModule)},
  {path: 'willing-to-watch-series', loadChildren: () => import('../../src/app/Modules/willing-to-watch-series/willing-to-watch-series.module').then (m => m.WillingToWatchSeriesModule)},
  {path: '', loadChildren: () => import('../app/Modules/sign-in/sign-in.module').then(m => m.SignInModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
