import { HttpException, Injectable, Logger } from '@nestjs/common';

// === micro-orm ===
import { EntityManager, EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';

// === entities ===
import { MovieEntity } from './movie.entity';

// === interfaces ===
import { IMovie } from './movie.interface';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(MovieEntity)
    private readonly movieRepository: EntityRepository<IMovie>,
    private readonly em: EntityManager,
  ) {}

  async getAll(): Promise<IMovie[] | []> {
    try {
      return await this.movieRepository.findAll();
    } catch ({ message }) {
      Logger.error(message);

      return [];
    }
  }

  async getById(id: string): Promise<IMovie | HttpException> {
    try {
      return await this.movieRepository.findOneOrFail(id);
    } catch (err) {
      Logger.error(err.message);

      return new HttpException({ Movie: `${id} not found` }, 404);
    }
  }

  async add(movie: IMovie): Promise<void> {
    try {
      const movieEntity = this.em.create(MovieEntity, movie);
      await this.movieRepository.persistAndFlush(movieEntity);
    } catch ({ message }) {
      Logger.error(message);
    }
  }

  async deleteAll(): Promise<void> {
    try {
      await this.movieRepository.nativeDelete(MovieEntity);
    } catch ({ message }) {
      Logger.error(message);
    }
  }

  async deleteById(id: string): Promise<void> {
    try {
      this.movieRepository.nativeDelete({ id });
    } catch ({ message }) {
      Logger.error(message);
    }
  }

  async updateById(id: string, movie: IMovie): Promise<void> {
    try {
      this.movieRepository.nativeUpdate(id, movie);
    } catch ({ message }) {
      Logger.error(message);
    }
  }
}
