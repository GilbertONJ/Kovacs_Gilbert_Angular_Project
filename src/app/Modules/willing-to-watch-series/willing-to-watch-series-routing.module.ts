import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WillingToWatchSeriesComponent } from 'src/app/Pages/willing-to-watch-series/willing-to-watch-series.component';

const routes: Routes = [
  {path: '', component:WillingToWatchSeriesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WillingToWatchSeriesRoutingModule { }
