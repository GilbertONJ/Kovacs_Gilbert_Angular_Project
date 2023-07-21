import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LastSongsComponent } from 'src/app/Pages/last-songs/last-songs.component';

const routes: Routes = [
  {path: '', component: LastSongsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LastSongRoutingModule { }
