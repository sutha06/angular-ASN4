import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PetDetailsComponent} from "./pet-details/pet-details.component";
import {PetIndexComponent} from "./pet-index/pet-index.component";

const routes: Routes = [
  {path: 'index', component: PetIndexComponent},
  {path: 'pets/:name', component: PetDetailsComponent},
  // { path: 'owners', component: OwnersComponent },
  {path: '', redirectTo: '/index', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
