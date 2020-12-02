import { IBase } from 'src/shared/interfaces/base.interface';

export interface IUser extends IBase {
  username: string;
  password: string;
}
