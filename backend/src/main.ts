// Keep this first to load env variables before importing any files
// eslint-disable-next-line import/order
import dotenv from './dotenv';
dotenv.config({ allowEmptyValues: ['ALLOWED_HOST'] });

import { CrudConfigService } from '@nestjsx/crud';

// This workaround makes all crud routes blacklisted by default.
// You can whitelist them on each controller. See UserController for example.
// Keep this before AppModule import
CrudConfigService.load({
  routes: {
    exclude: [
      'getManyBase',
      'getOneBase',
      'createOneBase',
      'createManyBase',
      'updateOneBase',
      'replaceOneBase',
      'deleteOneBase',
    ],
  },
});

import { ValidationPipe } from '@nestjs/common';
import { ModuleRef, NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import { EntityNotFoundFilter } from './exception/entity-not-found.filter';
import { QueryFailedFilter } from './exception/query-failed.filter';
import { CustomLogger } from './modules/logger/custom-logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: new CustomLogger() });
  const moduleRef = app.get(ModuleRef);
  const logger = await moduleRef.resolve(CustomLogger);
  app.useLogger(logger);

  if (typeof process.env.ALLOWED_HOST === 'string') {
    app.enableCors({ credentials: true, origin: process.env.ALLOWED_HOST });
  }

  app.use(cookieParser());

  app.useGlobalFilters(new EntityNotFoundFilter());
  app.useGlobalFilters(new QueryFailedFilter());

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  // Setting up Swagger document
  if (process.env.NODE_ENV === 'development') {
    const options = new DocumentBuilder()
      .setTitle('Seed NestJs')
      .setDescription('Auto generated swagger documentation for seed NestJs application')
      .setVersion('1.0')
      .addBearerAuth({ type: 'http', scheme: 'Bearer', bearerFormat: 'JWT' }, 'access-token')
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('swagger', app, document);
  }

  await app.listen(process.env.SERVER_PORT ?? 8000);
}

void bootstrap();
