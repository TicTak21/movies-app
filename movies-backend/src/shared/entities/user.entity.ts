// === mikro-orm ===
import { Entity, Property } from '@mikro-orm/core';

// === entities ===
import { BaseEntity } from './base.entity';

// === interfaces ===
import { IUser } from '../interfaces/user.interface';

@Entity()
export class UserEntity extends BaseEntity implements IUser {
  constructor() {
    super();
  }

  @Property({ type: 'string' })
  password: string;

  @Property({ type: 'string' })
  login: string;
}
