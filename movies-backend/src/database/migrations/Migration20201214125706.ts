import { Migration } from '@mikro-orm/migrations';

export class Migration20201214125706 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "actor_entity" ("id" varchar(255) not null, "created_at" varchar(255) not null, "updated_at" varchar(255) not null, "name" varchar(255) not null, "born" varchar(255) null, "starred_in" jsonb null, "photos" jsonb null, "awards" jsonb null, "occupation" jsonb null, "bio" varchar(255) null, "gender" varchar(255) null);');
    this.addSql('alter table "actor_entity" add constraint "actor_entity_pkey" primary key ("id");');
  }

}
