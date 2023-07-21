import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WillingToWatchComponent } from 'src/app/Pages/willing-to-watch/willing-to-watch.component';

const routes: Routes = [
  {path: '', component: WillingToWatchComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WillingToWatchRoutingModule { }
