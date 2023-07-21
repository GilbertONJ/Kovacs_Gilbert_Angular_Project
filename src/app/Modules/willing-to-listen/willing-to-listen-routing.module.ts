import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WillingToListenComponent } from 'src/app/Pages/willing-to-listen/willing-to-listen.component';

const routes: Routes = [
  {path: '', component:WillingToListenComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WillingToListenRoutingModule { }
