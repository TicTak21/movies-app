import { Migration } from '@mikro-orm/migrations';

export class Migration20201204141938 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "movie_entity" ("id" varchar(255) not null, "created_at" varchar(255) not null, "updated_at" varchar(255) not null, "title" varchar(200) null, "description" varchar(255) null, "views" int4 not null, "rating" double precision not null, "genres_ids" jsonb null, "adult" bool not null, "country" varchar(255) null, "released_at" varchar(255) not null);',
    );
    this.addSql(
      'alter table "movie_entity" add constraint "movie_entity_pkey" primary key ("id");',
    );
  }
}
