import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Logger,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';

// === swagger ===
import {
  ApiBearerAuth,
  ApiBody,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
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

  @ApiQuery({ name: 'limit', required: false })
  @ApiOkResponse({ description: 'Get all movies' })
  @Get()
  getAll(
    @Query() { limit }: { limit: string },
  ): Promise<IMovie[] | []> | HttpException {
    if (limit) {
      const parsedLimit = parseInt(limit);

      if (Number.isNaN(parsedLimit)) {
        const errMsg = 'invalid limit format in query';
        Logger.error(errMsg);

        return new HttpException({ Limit: errMsg }, 400);
      }

      return this.movieService.getAll(parsedLimit);
    }

    return this.movieService.getAll();
  }

  @ApiOkResponse({ description: 'Get movie by id' })
  @Get(':id')
  getById(@Param('id') id: string): Promise<IMovie | HttpException> {
    return this.movieService.getById(id);
  }

  @ApiBearerAuth()
  @ApiOkResponse({ description: 'Add movie', status: 201 })
  @UseGuards(JwtAuthGuard)
  @Post()
  add(@Body() { movie }: { movie: IMovie }): Promise<IMovie | HttpException> {
    return this.movieService.add(movie);
  }

  @ApiBearerAuth()
  @ApiOkResponse({ description: 'Delete all movies' })
  @UseGuards(JwtAuthGuard)
  @Delete()
  deleteAll(): void {
    this.movieService.deleteAll();
  }

  @ApiBearerAuth()
  @ApiOkResponse({ description: 'Delete movie by id' })
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteById(@Param('id') id: string): Promise<IMovie | HttpException> {
    return this.movieService.deleteById(id);
  }

  @ApiBearerAuth()
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
