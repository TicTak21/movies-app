// === mikro-orm ===
import { Entity, Property } from '@mikro-orm/core';

// === entities ===
import { BaseEntity } from '../shared/entities/base.entity';

// === shared ===
import { getTimestamp } from '../shared/utils/Date.util';

// === interfaces ===
import { IMovie } from './movie.interface';

@Entity()
export class MovieEntity extends BaseEntity implements IMovie {
  constructor() {
    super();
  }

  @Property({ type: 'string', length: 200, nullable: true })
  title?: string;

  @Property({ type: 'string', nullable: true })
  description?: string;

  @Property({ type: 'number' })
  views = 0;

  @Property({ type: 'double' })
  rating = 0;

  @Property({ type: 'ArrayType', nullable: true })
  genresIds?: number[];

  @Property({ type: 'boolean' })
  adult = false;

  @Property({ type: 'string', nullable: true })
  country?: string;

  @Property({ type: 'string' })
  releasedAt: string = getTimestamp();
}
