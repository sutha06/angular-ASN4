export interface PictureJson {
  img: string;
}

export interface PetJson {
  name: string;
  petKind: string;
  age: number;
  picture: PictureJson;
}

export interface CatalogJson {
  pets: PetJson[];
}

export interface DataJson {
  _embedded: CatalogJson;
}
