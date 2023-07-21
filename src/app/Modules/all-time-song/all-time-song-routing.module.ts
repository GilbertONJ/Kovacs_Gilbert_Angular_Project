import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTimeSongComponent } from 'src/app/Pages/all-time-song/all-time-song.component';

const routes: Routes = [
  {path: '', component:AllTimeSongComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllTimeSongRoutingModule { }
