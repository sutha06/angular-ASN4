export interface PictureJson {
  href: string;
}
export interface PetJson {
  id: number;
  name: string;
  petKind: string;
  age: number;
  image: PictureJson;
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




