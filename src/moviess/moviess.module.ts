import { Module } from '@nestjs/common';
import { MoviessController } from './moviess.controller';
import { MoviessService } from './moviess.service';

@Module({
  controllers: [MoviessController],
  providers: [MoviessService],
})
export class MoviessModule {}
