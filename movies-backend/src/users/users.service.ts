import { EntityRepository, EntityManager } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { HttpException, Injectable, Logger } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { IUser } from './user.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: EntityRepository<IUser>,
    private readonly em: EntityManager,
  ) {}

  private readonly users = [
    {
      id: 1,
      username: 'user',
      password: 'user',
    },
  ];

  async findOne(username: string): Promise<any> {
    return this.users.find(user => user.username == username);
  }

  async getAll(): Promise<IUser[] | []> {
    try {
      return await this.userRepository.findAll();
    } catch ({ message }) {
      Logger.error(message);

      return [];
    }
  }

  async getById(id: string): Promise<IUser | HttpException> {
    try {
      return await this.userRepository.findOneOrFail(id);
    } catch (err) {
      Logger.error(err.message);

      return new HttpException({ User: `${id} not found` }, 404);
    }
  }

  async add(user: IUser): Promise<IUser | HttpException> {
    try {
      const userEntity = this.em.create(UserEntity, user);
      await this.userRepository.persistAndFlush(userEntity);

      return userEntity;
    } catch ({ message }) {
      Logger.error(message);

      return new HttpException(
        { User: `Can't add user id = ${user.id} ` },
        404,
      );
    }
  }
}
