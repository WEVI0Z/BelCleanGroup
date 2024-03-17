import {Photo} from "./photo";

export interface Item {
  name: string,
  shortDescription: string,
  description: string,
  photos: Photo[]
}
