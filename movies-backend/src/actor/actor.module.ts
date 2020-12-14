import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Logger, Module } from '@nestjs/common';
import { ActorController } from './actor.controller';
import { ActorEntity } from './actor.entity';
import { ActorService } from './actor.service';

@Module({
  imports: [MikroOrmModule.forFeature([ActorEntity])],
  providers: [ActorService, Logger],
  controllers: [ActorController],
})
export class ActorModule {}
