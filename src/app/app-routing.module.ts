import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PetDetailsComponent} from "./pet-details/pet-details.component";
import {PetIndexComponent} from "./pet-index/pet-index.component";
import {OwnerDetailsComponent} from "./owner-details/owner-details.component";

const routes: Routes = [
  {path: 'index', component:  PetDetailsComponent},
  {path: 'pets', component: PetIndexComponent},
  {path: 'owners', component: OwnerDetailsComponent },
  {path: '', redirectTo: '/index', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
