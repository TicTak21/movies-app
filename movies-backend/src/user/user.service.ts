import { Injectable } from '@nestjs/common';
import { IUser } from './user.interface';

@Injectable()
export class UserService {
  private readonly users: IUser[] = [
    {
      id: '1',
      login: '1234',
      password: '1234',
      createdAt: '1606845196658',
      updatedAt: '1606845196658',
    },
    {
      id: '2',
      login: 'asdf',
      password: 'asdf',
      createdAt: '1606845196658',
      updatedAt: '1606845196658',
    },
  ];

  async findOne(login: string): Promise<IUser | undefined> {
    return this.users.find(user => user.login === login);
  }
}
