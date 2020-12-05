import { Migration } from '@mikro-orm/migrations';

export class Migration20201205191903 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "user_entity" ("id" varchar(255) not null, "created_at" varchar(255) not null, "updated_at" varchar(255) not null, "username" varchar(20) not null, "password" varchar(20) not null, "first_name" varchar(20) null, "last_name" varchar(20) null, "is_active" varchar(100) not null, "image" varchar(100) null, "favorites" jsonb null, "watch_later" jsonb null);');
    this.addSql('alter table "user_entity" add constraint "user_entity_pkey" primary key ("id");');
  }

}
