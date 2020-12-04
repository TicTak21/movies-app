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

  async add(movie: IMovie): Promise<IMovie | HttpException> {
    try {
      const movieEntity = this.em.create(MovieEntity, movie);
      await this.movieRepository.persistAndFlush(movieEntity);

      return movieEntity;
    } catch ({ message }) {
      Logger.error(message);

      return new HttpException(
        { Movie: `Can't add movie id = ${movie.id} ` },
        404,
      );
    }
  }

  async deleteAll(): Promise<void> {
    try {
      await this.movieRepository.nativeDelete(MovieEntity);
    } catch ({ message }) {
      Logger.error(message);
    }
  }

  async deleteById(id: string): Promise<IMovie | HttpException> {
    try {
      this.movieRepository.nativeDelete({ id });

      return this.movieRepository.findOne({ id });
    } catch ({ message }) {
      Logger.error(message);

      return new HttpException(
        { Movie: `Can't delete movie id = ${id} ` },
        404,
      );
    }
  }

  async updateById(id: string, movie: IMovie): Promise<IMovie | HttpException> {
    try {
      this.movieRepository.nativeUpdate(id, movie);

      return this.movieRepository.findOne({ id });
    } catch ({ message }) {
      Logger.error(message);

      return new HttpException(
        { Movie: `Can't update movie id = ${id} ` },
        404,
      );
    }
  }
}
