import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CantonesComponent } from './cantones/cantones.component';
const routes: Routes = [
  {path: '',component:CantonesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
