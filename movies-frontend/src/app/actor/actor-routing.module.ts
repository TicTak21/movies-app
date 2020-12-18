import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActorListComponent } from './components/actor-list/actor-list.component';

const routes: Routes = [
  { path: '', component: ActorListComponent, pathMatch: 'full' },
  // { path: ':id', component: ActorDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActorRoutingModule {}
