import { Injectable } from '@angular/core';
import {Pet} from "././pet";
import {DataJson, PetJson} from "./json-structure";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PetDataService {

  constructor(private http: HttpClient) {
  }

  private static imageFolder: string = 'http://localhost:8080/images/pets/';
  private static dataUrl: string = 'http://localhost:8080/api/pets';

  private static json2Pet(petJson: PetJson): Pet {
    const pet: Pet = new Pet();
    pet.name = petJson.name;
    pet.petKind = petJson.petKind
    pet.age = petJson.age;
    pet.petImgSrc = PetDataService.imageFolder + petJson.petPicture
    return pet;
  }

  public getAllPets(): Observable<Pet[]> {
    return this.http.get<DataJson>(PetDataService.dataUrl)
      .pipe(
        map(data => data._embedded.pets
          .map(pet => PetDataService.json2Pet(pet)))
      )
  }

  public getPetByName(name: string): Observable<Pet | undefined>{
    return this.http.get<PetJson>(`${PetDataService.dataUrl}/${name}`)
      .pipe(map(pet => PetDataService.json2Pet(pet)));
  }
}
