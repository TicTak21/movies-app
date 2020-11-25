import { __prod__ } from './constants';
import { Logger } from '@nestjs/common';
import { Options } from '@mikro-orm/core';

// === entities ===
import { MovieEntity } from './movie/movie.entity';
import { BaseEntity } from './shared/entities/base.entity';

const logger = new Logger('MikroORM');

const config: Options = {
  migrations: {
    path: './src/database/migrations',
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [BaseEntity, MovieEntity],
  entitiesTs: ['src/**/*.entity.ts'],
  dbName: 'movies-backend',
  type: 'postgresql',
  port: 5432,
  debug: !__prod__,
  logger: logger.log.bind(logger),
};

export default config;
