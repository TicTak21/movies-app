import { IMovie } from 'src/movie/movie.interface';
import { IBase } from 'src/shared/interfaces/base.interface';

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
