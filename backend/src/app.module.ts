import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from 'auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { LoggerModule } from './modules/logger/logger.module';
import { LoggerMiddleware } from './modules/logger/logger.middleware';

@Module({
  imports: [TypeOrmModule.forRoot(), UserModule, AuthModule, LoggerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
