import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateMovieDTO } from './dto/createMovie.dto';
import { UpdateMovieDTO } from './dto/updateMovie.dto';
import { Movie } from './entities/moviess.entity';
import { MoviessService } from './moviess.service';

@Controller('moviess')
export class MoviessController {
  constructor(private readonly moviesService: MoviessService) {}
  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('/search')
  search(@Query('year') year: string) {
    return `looking for movies after ${year}`;
  }
  @Get(':id')
  getOne(@Param('id') id: number): Movie {
    return this.moviesService.getOne(id);
  }

  @Post()
  postMovie(@Body() movieData: CreateMovieDTO) {
    return this.moviesService.createOne(movieData);
  }

  @Delete('/:id')
  deleteMovie(@Param('id') id: number) {
    return this.moviesService.deleteOne(id);
  }

  @Patch('/:id')
  updateMovie(@Param('id') id: number, @Body() updateData: UpdateMovieDTO) {
    return this.moviesService.update(id, updateData);
  }
}
