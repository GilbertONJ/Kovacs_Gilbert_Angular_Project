import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTimeMoviesComponent } from 'src/app/Pages/all-time-movies/all-time-movies.component';

const routes: Routes = [
  {path: '', component: AllTimeMoviesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllTimeMoviesRoutingModule { }
