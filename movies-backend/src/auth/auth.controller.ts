import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from '../shared/guards/local-auth.guard';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';

export type ILogin = {
  username: string;
  password: string;
};

@ApiTags('Login')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOkResponse({ description: 'Returns jwt token' })
  @ApiBody({ required: true, description: 'login credentials' })
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
