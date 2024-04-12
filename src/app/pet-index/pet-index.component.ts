import { Component } from '@angular/core';
import {Pet} from ".././pet";
import {PetDataService} from "../pet-data.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-pet-index',
  templateUrl: './pet-index.component.html',
  styleUrls: ['./pet-index.component.css']
})
export class PetIndexComponent {

  pets: Observable<Pet[]>;

  constructor(petDataService: PetDataService) {
    this.pets = petDataService.getAllPets();
  }
}
