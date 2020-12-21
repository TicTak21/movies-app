import { Migration } from '@mikro-orm/migrations';

export class Migration20201221095752 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "movie_entity" add column "actors" jsonb null;');
  }

}
