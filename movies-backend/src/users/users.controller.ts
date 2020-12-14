import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';

// === swagger ===
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/shared/guards/auth.guard';

// === interfaces ===
import { IUser } from './user.interface';

// === services ===
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOkResponse({ description: 'Get all users' })
  @Get()
  getAll(): Promise<IUser[] | []> {
    return this.usersService.getAll();
  }

  @ApiOkResponse({ description: 'Get user by id' })
  @Get(':id')
  getById(@Param('id') id: string): Promise<IUser | HttpException> {
    return this.usersService.getById(id);
  }

  @ApiBearerAuth()
  @ApiResponse({ description: 'Add user', status: 201 })
  @UseGuards(JwtAuthGuard)
  @Post()
  add(@Body() { user }: { user: IUser }): Promise<IUser | HttpException> {
    return this.usersService.add(user);
  }
}
