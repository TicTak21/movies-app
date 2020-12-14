// === mikro-orm ===
import { Entity, Property } from '@mikro-orm/core';

// === entities ===
import { BaseEntity } from '../shared/entities/base.entity';

// === interfaces ===
import { IUser } from './user.interface';
import { IMovie } from 'src/movie/movie.interface';

// === swagger ===
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class UserEntity extends BaseEntity implements IUser {
  constructor() {
    super();
  }

  @ApiProperty({
    example: 'jonny_doe1234',
    description: 'User username',
    required: true,
    nullable: false,
    type: 'string',
    maxLength: 20,
    minLength: 4,
  })
  @Property({ type: 'string', length: 20, nullable: false })
  username: string;

  @ApiProperty({
    example: 'johndoe4321',
    description: 'User password',
    required: true,
    nullable: false,
    type: 'string',
    maxLength: 20,
    minLength: 4,
  })
  @Property({ type: 'string', length: 20, nullable: false })
  password: string;

  @ApiProperty({
    example: 'John',
    description: 'User first name',
    required: false,
    nullable: true,
    type: 'string',
    maxLength: 20,
    minLength: 1,
  })
  @Property({ type: 'string', length: 20, nullable: true })
  firstName?: string;

  @ApiProperty({
    example: 'Doe',
    description: 'User last name',
    required: false,
    nullable: true,
    type: 'string',
    maxLength: 20,
    minLength: 1,
  })
  @Property({ type: 'string', length: 20, nullable: true })
  lastName?: string;

  @ApiProperty({
    example: 'true',
    description: 'User active status',
    required: true,
    nullable: false,
    type: 'boolean',
  })
  @Property({ type: 'string', length: 100, nullable: false })
  isActive: boolean;

  @ApiProperty({
    example: 'some image',
    description: 'User avatar',
    required: false,
    nullable: true,
    type: 'string',
  })
  @Property({ type: 'string', length: 100, nullable: true })
  image?: string;

  @ApiProperty({
    description: 'User favorite movies',
    required: false,
    nullable: true,
    type: 'array',
    items: {
      type: 'IMovie',
    },
  })
  @Property({ type: 'ArrayType', nullable: true })
  favorites?: IMovie[];

  @ApiProperty({
    description: 'User `watch later` list',
    required: false,
    nullable: true,
    type: 'array',
    items: {
      type: 'IMovie',
    },
  })
  @Property({ type: 'ArrayType', nullable: true })
  watchLater?: IMovie[];
}
