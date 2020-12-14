import { Logger } from '@nestjs/common';
import { Options } from '@mikro-orm/core';
import { ConfigService } from '@nestjs/config';
import dotenv from 'dotenv';
import { __prod__ } from './constants';

// === entities ===
import { UserEntity } from './users/user.entity';
import { MovieEntity } from './movie/movie.entity';
import { BaseEntity } from './shared/entities/base.entity';
import { ActorEntity } from './actor/actor.entity';

const logger = new Logger('MikroORM');
dotenv.config();

const config: Options = {
  migrations: {
    path: './src/database/migrations',
    pattern: /^[\w-]+\d+\.[tj]s$/,
    disableForeignKeys: false,
  },
  entities: [BaseEntity, MovieEntity, UserEntity, ActorEntity],
  entitiesTs: ['src/**/*.entity.ts'],
  clientUrl: new ConfigService().get<string>('DATABASE_URL'),
  type: 'postgresql',
  port: 5432,
  debug: !__prod__,
  logger: logger.log.bind(logger),
};

export default config;
