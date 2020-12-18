import {
  Body,
  Controller,
  Get,
  HttpException,
  Logger,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/shared/guards/auth.guard';
import { IActor } from './actor.interface';
import { ActorService } from './actor.service';

@ApiTags('Actors')
@Controller('actors')
export class ActorController {
  constructor(private readonly actorService: ActorService) {}

  @ApiQuery({ name: 'limit', required: false })
  @ApiOkResponse({ description: 'Get all actors' })
  @Get()
  getAll(
    @Query() { limit }: { limit: string },
  ): Promise<IActor[] | []> | HttpException {
    if (limit) {
      const parsedLimit = parseInt(limit);

      if (Number.isNaN(parsedLimit)) {
        const errMsg = 'invalid limit format in query';
        Logger.error(errMsg);

        return new HttpException({ Limit: errMsg }, 400);
      }

      return this.actorService.getAll(parsedLimit);
    }

    return this.actorService.getAll();
  }

  @ApiOkResponse({ description: 'Get actor by id' })
  @Get(':id')
  getById(@Param('id') id: string): Promise<IActor | HttpException> {
    return this.actorService.getById(id);
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({ description: 'Add actor', status: 201 })
  @UseGuards(JwtAuthGuard)
  @Post()
  add(@Body() { actor }: { actor: IActor }): Promise<IActor | HttpException> {
    return this.actorService.add(actor);
  }
}
