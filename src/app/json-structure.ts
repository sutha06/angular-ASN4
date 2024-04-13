export interface PictureJson {
  imgSrc: string;
}
export interface PetJson {
  name: string;
  petKind: string;
  age: number;
  petPicture: PictureJson;
}
export interface CatalogJson {
  pets: PetJson[];
  owners: OwnerJson[];
}

export interface DataJson {
  _embedded: CatalogJson;
}


export interface OwnerJson {
  firstName: string;
  lastName: string;
}




