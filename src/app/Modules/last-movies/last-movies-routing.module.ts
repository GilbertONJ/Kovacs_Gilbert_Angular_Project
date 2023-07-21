import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LastMoviesComponent } from 'src/app/Pages/last-movies/last-movies.component';

const routes: Routes = [
  {path: '', component: LastMoviesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LastMoviesRoutingModule { }
