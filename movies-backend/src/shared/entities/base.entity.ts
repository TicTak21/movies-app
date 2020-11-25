import { PrimaryKey, Property } from '@mikro-orm/core';
import { getTimestamp } from '../utils/Date.util';
import { nanoid } from 'nanoid';

export abstract class BaseEntity {
  @PrimaryKey()
  id: string = nanoid(10);

  @Property({ type: 'string' })
  createdAt: string = getTimestamp();

  @Property({ type: 'string', onUpdate: () => getTimestamp() })
  updatedAt: string = getTimestamp();
}
