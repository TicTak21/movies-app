import { IBase } from './base.interface';

export interface IUser extends IBase {
  login: string;
  password: string;
}
