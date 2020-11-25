import { Module } from '@nestjs/common';

// === mikro-orm ===
import { MikroOrmModule } from '@mikro-orm/nestjs';

// === controllers ===
import { MovieController } from 'src/movie/movie.controller';

// === entities ===
import { MovieEntity } from 'src/movie/movie.entity';

// === services ===
import { MovieService } from 'src/movie/movie.service';

@Module({
  imports: [MikroOrmModule.forFeature([MovieEntity])],
  providers: [MovieService],
  controllers: [MovieController],
})
export class MovieModule {}
