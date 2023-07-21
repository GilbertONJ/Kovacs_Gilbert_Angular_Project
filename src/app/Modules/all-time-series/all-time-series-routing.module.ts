import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTimeSeriesComponent } from 'src/app/Pages/all-time-series/all-time-series.component';

const routes: Routes = [
  {path: '', component:AllTimeSeriesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllTimeSeriesRoutingModule { }
