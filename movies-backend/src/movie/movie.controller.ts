import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';

// === swagger ===
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/shared/guards/auth.guard';

// === entities ===
import { MovieEntity } from './movie.entity';

// === interfaces ===
import { IMovie } from './movie.interface';

// === services ===
import { MovieService } from './movie.service';

@ApiTags('Movies')
@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @ApiOkResponse({ description: 'Get all movies' })
  @Get()
  getAll(): Promise<IMovie[] | []> {
    return this.movieService.getAll();
  }

  @ApiOkResponse({ description: 'Get movie by id' })
  @Get(':id')
  getById(@Param('id') id: string): Promise<IMovie | HttpException> {
    return this.movieService.getById(id);
  }

  @ApiOkResponse({ description: 'Add movie' })
  @UseGuards(JwtAuthGuard)
  @Post()
  add(@Body() { movie }: { movie: IMovie }): Promise<IMovie | HttpException> {
    return this.movieService.add(movie);
  }

  @ApiOkResponse({ description: 'Delete all movies' })
  @UseGuards(JwtAuthGuard)
  @Delete()
  deleteAll(): void {
    this.movieService.deleteAll();
  }

  @ApiOkResponse({ description: 'Delete movie by id' })
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteById(@Param('id') id: string): Promise<IMovie | HttpException> {
    return this.movieService.deleteById(id);
  }

  @ApiOkResponse({ description: 'Update movie by id' })
  @ApiBody({ type: MovieEntity })
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  updateById(
    @Param('id') id: string,
    @Body('movie') movie: IMovie,
  ): Promise<IMovie | HttpException> {
    return this.movieService.updateById(id, movie);
  }
}
