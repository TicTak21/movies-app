import { IBase } from '../shared/interfaces/base.interface';
import { IMovie } from '../shared/interfaces/movie.interface';

export interface IActor extends IBase {
  name: string;
  born?: string;
  starredIn?: IMovie[];
  photos?: string[];
  // IAward
  awards?: string[];
  occupation?: string[];
  bio?: string;
  gender?: string;
}
