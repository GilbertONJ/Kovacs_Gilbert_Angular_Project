import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from 'src/app/Pages/log-in/log-in.component';

const routes: Routes = [
  {path: '', component:LogInComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogInRoutingModule { }
