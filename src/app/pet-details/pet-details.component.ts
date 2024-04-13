import {Component, OnDestroy} from '@angular/core';
import {Pet} from '.././pet';
import {ActivatedRoute} from '@angular/router';
import {PetDataService} from '../pet-data.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnDestroy {

  pet: Pet | undefined;

  private petSub: Subscription | undefined;

  constructor(petDataService: PetDataService, activatedRoute: ActivatedRoute) {

    const name: string | null =  activatedRoute.snapshot.paramMap.get('name');
    if(name != null){
      this.petSub =
        petDataService.getPetByName(name).subscribe(pet => this.pet = pet);
    }
  }

  ngOnDestroy(){
    this.petSub?.unsubscribe();
  }
}
