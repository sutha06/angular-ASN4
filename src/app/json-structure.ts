export interface PictureJson {
  imgSrc: string;
}

export interface Owner {
  firstName: string;
  lastName: string;
}

export interface PetJson {
  name: string;
  petKind: string;
  age: number;
  petPicture: PictureJson;
}

export interface CatalogJson {
  pets: PetJson[];
}

export interface DataJson {
  _embedded: CatalogJson;
}
