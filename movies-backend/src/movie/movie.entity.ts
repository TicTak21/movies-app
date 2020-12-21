// === mikro-orm ===
import { Entity, Property } from '@mikro-orm/core';

// === entities ===
import { BaseEntity } from '../shared/entities/base.entity';

// === shared ===
import { getTimestamp } from '../shared/utils/Date.util';

// === interfaces ===
import { IMovie } from './movie.interface';

// === swagger ===
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class MovieEntity extends BaseEntity implements IMovie {
  constructor() {
    super();
  }

  @ApiProperty({
    example: 'Lincoln Lawyer',
    description: 'Movie title',
    required: true,
    nullable: false,
    type: 'string',
    maxLength: 200,
  })
  @Property({ type: 'string', length: 200, nullable: false })
  title: string;

  @ApiProperty({
    example:
      'Mick Haller is a defense lawyer who works out of his Lincoln. When a wealthy Realtor...',
    description: 'Movie description',
    required: false,
    nullable: true,
    type: 'string',
  })
  @Property({ type: 'string', nullable: true })
  description?: string;

  @ApiProperty({
    example: 5432,
    description: 'Movie views',
    required: true,
    nullable: false,
    type: 'integer',
  })
  @Property({ type: 'number' })
  views = 0;

  @ApiProperty({
    example: 8.8,
    description: 'Movie rating',
    required: true,
    nullable: false,
    type: 'double',
  })
  @Property({ type: 'double' })
  rating = 0;

  @ApiProperty({
    example: [11, 22, 63],
    description: 'Movie genres array',
    required: false,
    nullable: true,
    isArray: true,
    type: 'array',
    items: {
      type: 'integer',
    },
  })
  @Property({ type: 'ArrayType', nullable: true })
  genresIds?: number[];

  @ApiProperty({
    example: true,
    description: 'Movie adult label',
    required: true,
    nullable: false,
    type: 'boolean',
  })
  @Property({ type: 'boolean' })
  adult = false;

  @ApiProperty({
    example: 'true',
    description: 'Movie country',
    required: false,
    nullable: true,
    type: 'string',
  })
  @Property({ type: 'string', nullable: true })
  country?: string;

  @ApiProperty({
    example: '1606583165449',
    description: 'Movie release date',
    required: true,
    nullable: false,
    default: 'current time in unix format',
    type: 'string',
  })
  @Property({ type: 'string' })
  releasedAt: string = getTimestamp();
}
