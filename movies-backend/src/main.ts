import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// === swagger ===
import { DocumentBuilder } from '@nestjs/swagger/dist/document-builder';
import { SwaggerModule } from '@nestjs/swagger/dist/swagger-module';
import { MovieEntity } from './movie/movie.entity';
import { UserEntity } from './users/user.entity';
import { ActorEntity } from './actor/actor.entity';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const options = new DocumentBuilder()
    .setTitle('Movies API')
    .setDescription('Nest.js + MikroORM + PG API')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, options, {
    extraModels: [MovieEntity, UserEntity, ActorEntity],
  });
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 4000);
}
bootstrap();
