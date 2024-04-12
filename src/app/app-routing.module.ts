import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PetDetailsComponent} from "./pet-details/pet-details.component";
import {PetIndexComponent} from "./pet-index/pet-index.component";

const routes: Routes = [
  {path: '', component: PetIndexComponent},
  {path: 'flowers/:id', component: PetDetailsComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
