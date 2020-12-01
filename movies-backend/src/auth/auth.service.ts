import { Injectable } from '@nestjs/common';

// === services ===
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UserService) {}

  async validateUser(login: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(login);

    if (user && user.password === pass) {
      const { password, ...result } = user;

      return result;
    }
    return null;
  }
}
