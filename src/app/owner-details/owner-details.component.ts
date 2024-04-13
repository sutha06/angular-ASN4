import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Owner} from "../owner";
import {OwnerDataService} from "../owner-data.service";

@Component({
  selector: 'app-owner-index',
  templateUrl: './owner-details.component.html',
  styleUrls: ['./owner-details.component.css']
})
export class OwnerDetailsComponent {

  owners: Observable<Owner[]>;

  constructor(ownerDataService: OwnerDataService) {
    this.owners = ownerDataService.getAllOwners();
  }
}
