import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';

// === controllers ===
import { AppController } from './app.controller';

// === services ===
import { AppService } from './app.service';

// === modules
import { MovieModule } from './movie/movie.module';

// === configs ===
import config from './mikro-orm.config';

// === shared ===
import { HttpErrorFilter } from './shared/filters/http-error.filter';
import { LoggingInterceptor } from './shared/interceptors/logging.interceptor';

@Module({
  imports: [MikroOrmModule.forRoot(config), MovieModule],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_FILTER, useClass: HttpErrorFilter },
    { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor },
  ],
})
export class AppModule {}
