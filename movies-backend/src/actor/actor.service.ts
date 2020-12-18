import { EntityRepository, EntityManager } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { HttpException, Injectable, Logger } from '@nestjs/common';
import { ActorEntity } from './actor.entity';
import { IActor } from './actor.interface';

@Injectable()
export class ActorService {
  constructor(
    @InjectRepository(ActorEntity)
    private readonly actorRepository: EntityRepository<IActor>,
    private readonly em: EntityManager,
  ) {}

  async getAll(limit?: number): Promise<IActor[] | []> {
    try {
      return await this.actorRepository.findAll({ limit });
    } catch ({ message }) {
      Logger.error(message);

      return [];
    }
  }

  async getById(id: string): Promise<IActor | HttpException> {
    try {
      return await this.actorRepository.findOneOrFail(id);
    } catch (err) {
      Logger.error(err.message);

      return new HttpException({ Actor: `${id} not found` }, 404);
    }
  }

  async add(actor: IActor): Promise<IActor | HttpException> {
    try {
      const actorEntity = this.em.create(ActorEntity, actor);
      await this.actorRepository.persistAndFlush(actorEntity);

      return actorEntity;
    } catch ({ message }) {
      Logger.error(message);

      return new HttpException(
        { Actor: `Can't add actor id = ${actor.id} ` },
        404,
      );
    }
  }
}
