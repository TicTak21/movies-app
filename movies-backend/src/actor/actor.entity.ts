// === mikro-orm ===
import { Entity, Property } from '@mikro-orm/core';
import { IMovie } from 'src/movie/movie.interface';

// === entities ===
import { BaseEntity } from '../shared/entities/base.entity';

// === interfaces ===
import { IActor } from './actor.interface';

// === swagger ===
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class ActorEntity extends BaseEntity implements IActor {
  constructor() {
    super();
  }

  @ApiProperty({
    example: 'Matthew McConaughey',
    description: 'Actor name',
    required: true,
    nullable: false,
    type: 'string',
  })
  @Property({ type: 'string', nullable: false })
  name: string;

  @ApiProperty({
    example: '11/22/63',
    description: 'Actor born date',
    required: false,
    nullable: true,
    type: 'string',
  })
  @Property({ type: 'string', nullable: true })
  born?: string;

  @ApiProperty({
    description: 'Actor films and serials',
    required: false,
    nullable: true,
    type: 'array',
    items: {
      type: 'IMovie',
    },
  })
  @Property({ type: 'ArrayType', nullable: true })
  starredIn?: IMovie[];

  @ApiProperty({
    description: 'Actor photos',
    required: false,
    nullable: true,
    type: 'array',
    items: {
      type: 'string',
    },
  })
  @Property({ type: 'ArrayType', length: 100, nullable: true })
  photos?: string[];

  @ApiProperty({
    description: 'Actor awards',
    required: false,
    nullable: true,
    type: 'array',
    items: {
      type: 'string',
    },
  })
  @Property({ type: 'ArrayType', length: 100, nullable: true })
  awards?: string[];

  @ApiProperty({
    description: 'Actor occupations',
    required: false,
    nullable: true,
    type: 'array',
    items: {
      type: 'string',
    },
  })
  @Property({ type: 'ArrayType', length: 10, nullable: true })
  occupation?: string[];

  @ApiProperty({
    description: 'Actor bio',
    required: false,
    nullable: true,
    type: 'string',
  })
  @Property({ type: 'string', nullable: true })
  bio?: string;

  @ApiProperty({
    example: 'Male/Female',
    description: 'Actor gender',
    required: false,
    nullable: true,
    type: 'string',
  })
  @Property({ type: 'string', nullable: true })
  gender?: string;
}
