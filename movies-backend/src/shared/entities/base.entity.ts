import { PrimaryKey, Property } from '@mikro-orm/core';
import { getTimestamp } from '../utils/Date.util';
import { nanoid } from 'nanoid';
import { ApiProperty } from '@nestjs/swagger';

export abstract class BaseEntity {
  @ApiProperty({
    example: '1234567890',
    description: 'Entity id',
    required: true,
    nullable: false,
    type: 'string',
    maxLength: 10,
    minLength: 10,
  })
  @PrimaryKey()
  id: string = nanoid(10);

  @ApiProperty({
    description: 'Entity created timestamp',
    required: true,
    nullable: false,
    type: 'string',
  })
  @Property({ type: 'string' })
  createdAt: string = getTimestamp();

  @ApiProperty({
    description: 'Entity updated timestamp',
    required: true,
    nullable: false,
    type: 'string',
  })
  @Property({ type: 'string', onUpdate: () => getTimestamp() })
  updatedAt: string = getTimestamp();
}
