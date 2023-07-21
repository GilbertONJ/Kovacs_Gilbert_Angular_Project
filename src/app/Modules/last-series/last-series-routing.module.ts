import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LastSeriesComponent } from 'src/app/Pages/last-series/last-series.component';

const routes: Routes = [
  {path: '', component:LastSeriesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LastSeriesRoutingModule { }
