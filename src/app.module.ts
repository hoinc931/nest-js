import { Module } from '@nestjs/common';
import { AppController, AppController2 } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [CategoryModule],
  controllers: [AppController, AppController2],
  providers: [AppService],
})
export class AppModule {}
