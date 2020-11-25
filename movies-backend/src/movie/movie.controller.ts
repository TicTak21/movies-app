import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Post,
  Put,
} from '@nestjs/common';

// === swagger ===
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';

// === entities ===
import { MovieEntity } from './movie.entity';

// === interfaces ===
import { IMovie } from './movie.interface';

// === services ===
import { MovieService } from './movie.service';

@ApiTags('movies')
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
  @Post()
  add(@Body() { movie }: { movie: IMovie }): void {
    this.movieService.add(movie);
  }

  @ApiOkResponse({ description: 'Delete all movies' })
  @Delete()
  deleteAll(): void {
    this.movieService.deleteAll();
  }

  @ApiOkResponse({ description: 'Delete movie by id' })
  @Delete(':id')
  deleteById(@Param('id') id: string): void {
    this.movieService.deleteById(id);
  }

  @ApiOkResponse({ description: 'Update movie by id' })
  @ApiBody({ type: MovieEntity })
  @Put(':id')
  updateById(@Param('id') id: string, @Body('movie') movie: IMovie): void {
    this.movieService.updateById(id, movie);
  }
}
