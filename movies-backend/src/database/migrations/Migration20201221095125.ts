import { Migration } from '@mikro-orm/migrations';

export class Migration20201221095125 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "movie_entity" drop constraint if exists "movie_entity_title_check";');
    this.addSql('alter table "movie_entity" alter column "title" type varchar(200) using ("title"::varchar(200));');
    this.addSql('alter table "movie_entity" alter column "title" set not null;');
  }

}
