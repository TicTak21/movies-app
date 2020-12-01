import { Controller, Get } from '@nestjs/common';

// === services ===
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  auth() {
    return 'Auth';
  }
}
