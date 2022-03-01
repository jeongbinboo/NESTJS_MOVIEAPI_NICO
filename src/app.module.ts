import { Module } from '@nestjs/common';
import { MoviessModule } from './moviess/moviess.module';
import { AppController } from './app/app.controller';

@Module({
  imports: [MoviessModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
