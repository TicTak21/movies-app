import { IMovie } from 'src/movie/movie.interface';
import { IBase } from 'src/shared/interfaces/base.interface';

export interface IUser extends IBase {
  username: string;
  password: string;
  firstName?: string;
  lastName?: string;
  isActive: boolean;
  favorites?: IMovie[];
  watchLater?: IMovie[];
}
