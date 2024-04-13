import { Injectable } from '@angular/core';
import {Owner} from "././owner";
import {DataJson, OwnerJson} from "./json-structure";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OwnerDataService {

  constructor(private http: HttpClient) {
  }

  // private static imageFolder: string = 'http://localhost:8080/images/pets/';
  private static dataUrl: string = 'http://localhost:8080/api/owners';

  private static json2Owner(ownerJson: OwnerJson): Owner {
    const owner: Owner = new Owner();
    owner.firstName = ownerJson.firstName;
    owner.lastName = ownerJson.lastName;
    return owner;
  }

  public getAllOwners(): Observable<Owner[]> {
    return this.http.get<DataJson>(OwnerDataService.dataUrl)
      .pipe(
        map(data => data._embedded.owners
          .map(owner => OwnerDataService.json2Owner(owner)))
      )
  }

  public getOwnerByName(name: string): Observable<Owner | undefined>{
    return this.http.get<OwnerJson>(`${OwnerDataService.dataUrl}/${name}`)
      .pipe(map(owner => OwnerDataService.json2Owner(owner)));
  }
}
