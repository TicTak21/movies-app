import { Controller, Get, Redirect } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Index')
@Controller()
export class AppController {
  @Get()
  @Redirect('/api', 301)
  index() {
    return '';
  }
}
