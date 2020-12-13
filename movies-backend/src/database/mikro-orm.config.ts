import { __prod__ } from '../constants';
import { Logger } from '@nestjs/common';
import { Options } from '@mikro-orm/core';
import dotenv from 'dotenv';
dotenv.config();

// === entities ===
import { MovieEntity } from '../movie/movie.entity';
import { BaseEntity } from '../shared/entities/base.entity';
import { UserEntity } from '../users/user.entity';
import { ConfigService } from '@nestjs/config';

const logger = new Logger('MikroORM');

const config: Options = {
  migrations: {
    path: './src/database/migrations',
    pattern: /^[\w-]+\d+\.[tj]s$/,
    disableForeignKeys: false,
  },
  entities: [BaseEntity, MovieEntity, UserEntity],
  entitiesTs: ['src/**/*.entity.ts'],
  clientUrl: new ConfigService().get<string>('DATABASE_URL'),
  type: 'postgresql',
  port: 5432,
  debug: !__prod__,
  logger: logger.log.bind(logger),
};

export default config;
