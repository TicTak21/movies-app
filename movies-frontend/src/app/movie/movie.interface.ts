import { IBase } from '../shared/interfaces/base.interface';

export interface IMovie extends IBase {
  title?: string;
  description?: string;
  views: number;
  rating: number;
  genresIds?: number[];
  adult: boolean;
  country?: string;
  releasedAt: string;
}
