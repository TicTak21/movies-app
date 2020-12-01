import { IBase } from '../shared/interfaces/base.interface';

export interface IUser extends IBase {
  login: string;
  password: string;
}
